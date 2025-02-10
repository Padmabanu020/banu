import ServiceCall from "./service-call";
import { home } from "./service-routes.json";

export async function GetContactsApi() {
  const response = await ServiceCall({
    ...home.Contacts
  });

  return response;
}
export async function GetIconsApi() {
  const response = await ServiceCall({
    ...home.Icons
  });

  return response;
}

export async function GetHeroSectionApi() {
  const response = await ServiceCall({
    ...home.Content
  });
  return response;
}

export async function GetNavigationApi() {
  const response = await ServiceCall({
    ...home.Navigation
  });

  return response;
}