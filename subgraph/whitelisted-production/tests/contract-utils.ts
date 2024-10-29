// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
// biome-ignore lint/style/useImportType: <explanation>
import { Address, BigInt, type Bytes, ethereum } from "@graphprotocol/graph-ts";
import { newMockEvent } from "matchstick-as";
import type { Initialized, Paused, RoleAdminChanged, RoleGranted, RoleRevoked, Unpaused, Upgraded, Whitelist } from "../generated/Contract/Contract";

export function createInitializedEvent(version: BigInt): Initialized {
  const initializedEvent = changetype<Initialized>(newMockEvent());

  initializedEvent.parameters = new Array();

  initializedEvent.parameters.push(new ethereum.EventParam("version", ethereum.Value.fromUnsignedBigInt(version)));

  return initializedEvent;
}

export function createPausedEvent(account: Address): Paused {
  const pausedEvent = changetype<Paused>(newMockEvent());

  pausedEvent.parameters = new Array();

  pausedEvent.parameters.push(new ethereum.EventParam("account", ethereum.Value.fromAddress(account)));

  return pausedEvent;
}

export function createRoleAdminChangedEvent(role: Bytes, previousAdminRole: Bytes, newAdminRole: Bytes): RoleAdminChanged {
  const roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent());

  roleAdminChangedEvent.parameters = new Array();

  roleAdminChangedEvent.parameters.push(new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role)));
  roleAdminChangedEvent.parameters.push(new ethereum.EventParam("previousAdminRole", ethereum.Value.fromFixedBytes(previousAdminRole)));
  roleAdminChangedEvent.parameters.push(new ethereum.EventParam("newAdminRole", ethereum.Value.fromFixedBytes(newAdminRole)));

  return roleAdminChangedEvent;
}

export function createRoleGrantedEvent(role: Bytes, account: Address, sender: Address): RoleGranted {
  const roleGrantedEvent = changetype<RoleGranted>(newMockEvent());

  roleGrantedEvent.parameters = new Array();

  roleGrantedEvent.parameters.push(new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role)));
  roleGrantedEvent.parameters.push(new ethereum.EventParam("account", ethereum.Value.fromAddress(account)));
  roleGrantedEvent.parameters.push(new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender)));

  return roleGrantedEvent;
}

export function createRoleRevokedEvent(role: Bytes, account: Address, sender: Address): RoleRevoked {
  const roleRevokedEvent = changetype<RoleRevoked>(newMockEvent());

  roleRevokedEvent.parameters = new Array();

  roleRevokedEvent.parameters.push(new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role)));
  roleRevokedEvent.parameters.push(new ethereum.EventParam("account", ethereum.Value.fromAddress(account)));
  roleRevokedEvent.parameters.push(new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender)));

  return roleRevokedEvent;
}

export function createUnpausedEvent(account: Address): Unpaused {
  const unpausedEvent = changetype<Unpaused>(newMockEvent());

  unpausedEvent.parameters = new Array();

  unpausedEvent.parameters.push(new ethereum.EventParam("account", ethereum.Value.fromAddress(account)));

  return unpausedEvent;
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  const upgradedEvent = changetype<Upgraded>(newMockEvent());

  upgradedEvent.parameters = new Array();

  upgradedEvent.parameters.push(new ethereum.EventParam("implementation", ethereum.Value.fromAddress(implementation)));

  return upgradedEvent;
}

export function createWhitelistedEvent(account: Address, whitelisted: boolean): Whitelist {
  const whitelistedEvent = changetype<Whitelist>(newMockEvent());

  whitelistedEvent.parameters = new Array();

  whitelistedEvent.parameters.push(new ethereum.EventParam("account", ethereum.Value.fromAddress(account)));
  whitelistedEvent.parameters.push(new ethereum.EventParam("whitelisted", ethereum.Value.fromBoolean(whitelisted)));

  return whitelistedEvent;
}
