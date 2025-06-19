import * as frame from '@farcaster/frame-sdk'

export async function initializeFrame() {
  const user = await frame.sdk.context.user

  if (!user || !user.fid) {
    // most likely not in a frame
    return
  }

  window.userFid = user.fid;

  // You can now use the window.userFid in any of your React code, e.g. using a useEffect that listens for it to be set

  // Call the ready function to remove your splash screen when in a frame
  await frame.sdk.actions.ready();
}