---
sidebar_position: 3
---

# Integrating Whisper with ROS 2 for Voice Control

Now that we understand how to set up and use OpenAI Whisper, the next crucial step is to integrate it into our ROS 2 ecosystem. This allows the text output from Whisper to be consumed by other ROS 2 nodes, forming the basis of our robot's voice control system.

The typical workflow involves an audio input source (e.g., a microphone), a Whisper node to perform speech-to-text, and a ROS 2 topic to publish the transcribed text.

## ROS 2 Whisper Node Architecture

We will create a ROS 2 Python node that:
1.  **Listens for audio input:** This can be from a local microphone, or a ROS 2 audio topic if available.
2.  **Processes audio with Whisper:** Feeds the captured audio to the Whisper model for transcription.
3.  **Publishes transcribed text:** Publishes the resulting text to a dedicated ROS 2 topic (e.g., `/voice_commands`).

## Example ROS 2 Whisper Node (Conceptual)

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String
import whisper
import numpy as np
import pyaudio # For microphone input (requires 'pip install PyAudio')
import soundfile as sf # For saving/loading audio (requires 'pip install soundfile')

class WhisperNode(Node):
    def __init__(self):
        super().__init__('whisper_node')
        self.declare_parameter('whisper_model', 'base')
        self.whisper_model_name = self.get_parameter('whisper_model').get_parameter_value().string_value
        self.get_logger().info(f"Loading Whisper model: {self.whisper_model_name}")
        self.model = whisper.load_model(self.whisper_model_name)
        self.publisher_ = self.create_publisher(String, '/voice_commands', 10)

        # Configure PyAudio for microphone input
        self.audio = pyaudio.PyAudio()
        self.format = pyaudio.paInt16
        self.channels = 1
        self.rate = 16000 # Whisper expects 16kHz audio
        self.chunk = 1024
        self.record_seconds = 5 # Record 5 seconds of audio

        # Simple timer to trigger recording and transcription (can be event-driven)
        self.timer = self.create_timer(self.record_seconds + 1, self.timer_callback)
        self.get_logger().info("Whisper ROS 2 Node started, listening for commands...")

    def record_audio(self):
        self.get_logger().info("Recording audio...")
        stream = self.audio.open(format=self.format,
                                 channels=self.channels,
                                 rate=self.rate,
                                 input=True,
                                 frames_per_buffer=self.chunk)
        frames = []
        for _ in range(0, int(self.rate / self.chunk * self.record_seconds)):
            data = stream.read(self.chunk)
            frames.append(data)
        self.get_logger().info("Recording finished.")
        stream.stop_stream()
        stream.close()
        
        # Convert recorded frames to a format Whisper can use (e.g., a temporary WAV file)
        wave_output_filename = 'temp_audio.wav'
        sf.write(wave_output_filename, np.frombuffer(b''.join(frames), dtype=np.int16), self.rate)
        return wave_output_filename

    def timer_callback(self):
        audio_file = self.record_audio()
        try:
            result = self.model.transcribe(audio_file)
            command_text = result["text"].strip()
            if command_text:
                msg = String()
                msg.data = command_text
                self.publisher_.publish(msg)
                self.get_logger().info(f'Published: "{msg.data}"')
            else:
                self.get_logger().info("No speech detected.")
        except Exception as e:
            self.get_logger().error(f"Error during transcription: {e}")
        finally:
            import os
            if os.path.exists(audio_file):
                os.remove(audio_file)


def main(args=None):
    rclpy.init(args=args)
    whisper_node = WhisperNode()
    rclpy.spin(whisper_node)
    whisper_node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()

```

## Key Considerations for Integration

*   **Real-time vs. Batch:** The example above uses a simple timed recording. For true real-time interaction, you would typically use a voice activity detection (VAD) system to trigger transcription only when speech is detected, or use a streaming Whisper implementation.
*   **Wake Word Detection:** Integrate a lightweight wake word engine (e.g., Picovoice Porcupine, Snowboy) to activate the Whisper node only when a specific phrase (e.g., "Hey Robot") is spoken, saving computational resources.
*   **Audio Source:** Ensure the microphone is properly configured and providing clean audio at the expected sample rate (16kHz for Whisper).
*   **Topic Naming:** Use a clear and consistent topic name (e.g., `/voice_commands`) for publishing the transcribed text.
*   **Error Handling:** Implement robust error handling for audio input failures, transcription errors, and cases where no speech is detected.

With this ROS 2 Whisper node, our humanoid robot can now convert spoken human instructions into a textual format that the cognitive planning module can process.
