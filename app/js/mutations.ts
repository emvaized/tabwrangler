export async function mutateStorageSyncPersist({
  key,
  value,
}: {
  key: string;
  value: unknown;
}): Promise<void> {
  const data = await chrome.storage.sync.get({ "persist:settings": {} });
  return chrome.storage.sync.set({
    "persist:settings": { ...data["persist:settings"], [key]: value },
  });
}

export async function mutateStorageSync({
  key,
  value,
}: {
  key: string;
  value: unknown;
}): Promise<void> {
  return chrome.storage.sync.set({ [key]: value });
}