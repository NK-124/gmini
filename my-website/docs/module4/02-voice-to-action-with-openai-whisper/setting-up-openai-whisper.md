---
sidebar_position: 2
---

# Setting Up OpenAI Whisper

**OpenAI Whisper** is a general-purpose speech recognition model. It is trained on a large dataset of diverse audio and is also a multi-task model that can perform multilingual speech recognition, speech translation, and language identification. Its robustness makes it an excellent choice for converting spoken commands into text for our robot.

## Installation

Whisper can be installed as a Python package. Ensure you have Python 3.8+ and `pip` installed.

1.  **Install `ffmpeg`:** Whisper relies on `ffmpeg` for audio processing.
    *   **Linux:**
        ```bash
        sudo apt update && sudo apt install ffmpeg
        ```
    *   **macOS:**
        ```bash
        brew install ffmpeg
        ```
    *   **Windows:** Download `ffmpeg` from its official website and add it to your system's PATH.

2.  **Install Whisper via pip:**
    ```bash
    pip install openai-whisper
    ```
    If you have a GPU and CUDA installed, you might also want to install PyTorch with CUDA support for faster inference:
    ```bash
    pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118 # (for CUDA 11.8)
    ```

## Using Whisper for Speech-to-Text

Once installed, using Whisper in Python is straightforward.

```python
import whisper

# Load the model
# You can choose different model sizes: 'tiny', 'base', 'small', 'medium', 'large'
# Larger models are more accurate but slower and require more VRAM.
model = whisper.load_model("base")

# Transcribe an audio file
audio_file_path = "path/to/your/audio.mp3" # Can also be a .wav, .flac, etc.
result = model.transcribe(audio_file_path)

print(result["text"])
```

## Running Whisper from the Command Line

Whisper also provides a command-line interface (CLI) for quick transcription.

```bash
whisper "path/to/your/audio.mp3" --model base --language en
```

## Selecting a Model

Whisper comes in various sizes: `tiny`, `base`, `small`, `medium`, `large`.
*   `tiny`: Fastest, least accurate, smallest memory.
*   `large`: Slowest, most accurate, largest memory.

For real-time robotics applications, you might need to experiment with `tiny` or `base` models to meet latency requirements, especially if running on an embedded system without a powerful GPU.

## Key Considerations for Robotics

*   **Latency:** Real-time voice control requires low latency. Choose an appropriate model size and consider running inference on a GPU if available.
*   **Noise Robustness:** Robotic environments can be noisy. Whisper's general-purpose training makes it quite robust, but testing in your target environment is crucial.
*   **Wake Word Detection:** For continuous listening, you typically integrate Whisper with a wake word detection system (e.g., "Hey Robot") to avoid transcribing all background noise and save computational resources.

With Whisper set up, the next step is to integrate it with our ROS 2 system to convert spoken commands into text that our robot's AI brain can understand.
