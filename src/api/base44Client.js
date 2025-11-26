import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const ennobleSocialInnovationFoundation = createClient({
  appId: "692168db3c1690d4cfe3d214", 
  requiresAuth: true // Ensure authentication is required for all operations
});
