// Remove the useDocusaurusContext import as it's no longer needed here
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// const getBackendUrl = () => {
//   const { siteConfig } = useDocusaurusContext();
//   return siteConfig.customFields.backendUrl;
// };

export const postToChat = async (backendUrl, payload) => {
  const response = await fetch(`${backendUrl}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
  }
  return response.json();
};

export const startIngestion = async (backendUrl) => {
  // const backendUrl = getBackendUrl(); // This line is no longer needed
  const response = await fetch(`${backendUrl}/api/ingest`, {
    method: 'POST',
  });
  return response.json();
};
