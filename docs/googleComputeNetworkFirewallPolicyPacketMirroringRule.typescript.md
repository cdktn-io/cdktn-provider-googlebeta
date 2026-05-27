# `googleComputeNetworkFirewallPolicyPacketMirroringRule` Submodule <a name="`googleComputeNetworkFirewallPolicyPacketMirroringRule` Submodule" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkFirewallPolicyPacketMirroringRule <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRule" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule google_compute_network_firewall_policy_packet_mirroring_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer"></a>

```typescript
import { googleComputeNetworkFirewallPolicyPacketMirroringRule } from '@cdktn/provider-google-beta'

new googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule(scope: Construct, id: string, config: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTargetSecureTags">putTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetSecurityProfileGroup">resetSecurityProfileGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTargetSecureTags">resetTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTlsInspect">resetTlsInspect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMatch` <a name="putMatch" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putMatch"></a>

```typescript
public putMatch(value: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a>

---

##### `putTargetSecureTags` <a name="putTargetSecureTags" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTargetSecureTags"></a>

```typescript
public putTargetSecureTags(value: IResolvable | GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTargetSecureTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetRuleName"></a>

```typescript
public resetRuleName(): void
```

##### `resetSecurityProfileGroup` <a name="resetSecurityProfileGroup" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetSecurityProfileGroup"></a>

```typescript
public resetSecurityProfileGroup(): void
```

##### `resetTargetSecureTags` <a name="resetTargetSecureTags" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTargetSecureTags"></a>

```typescript
public resetTargetSecureTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTlsInspect` <a name="resetTlsInspect" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.resetTlsInspect"></a>

```typescript
public resetTlsInspect(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeNetworkFirewallPolicyPacketMirroringRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isConstruct"></a>

```typescript
import { googleComputeNetworkFirewallPolicyPacketMirroringRule } from '@cdktn/provider-google-beta'

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformElement"></a>

```typescript
import { googleComputeNetworkFirewallPolicyPacketMirroringRule } from '@cdktn/provider-google-beta'

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformResource"></a>

```typescript
import { googleComputeNetworkFirewallPolicyPacketMirroringRule } from '@cdktn/provider-google-beta'

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport"></a>

```typescript
import { googleComputeNetworkFirewallPolicyPacketMirroringRule } from '@cdktn/provider-google-beta'

googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleComputeNetworkFirewallPolicyPacketMirroringRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeNetworkFirewallPolicyPacketMirroringRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeNetworkFirewallPolicyPacketMirroringRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkFirewallPolicyPacketMirroringRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleTupleCount">ruleTupleCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.targetSecureTags">targetSecureTags</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.firewallPolicyInput">firewallPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.matchInput">matchInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.securityProfileGroupInput">securityProfileGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.targetSecureTagsInput">targetSecureTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tlsInspectInput">tlsInspectInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.firewallPolicy">firewallPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.securityProfileGroup">securityProfileGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tlsInspect">tlsInspect</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.match"></a>

```typescript
public readonly match: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference</a>

---

##### `ruleTupleCount`<sup>Required</sup> <a name="ruleTupleCount" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleTupleCount"></a>

```typescript
public readonly ruleTupleCount: number;
```

- *Type:* number

---

##### `targetSecureTags`<sup>Required</sup> <a name="targetSecureTags" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.targetSecureTags"></a>

```typescript
public readonly targetSecureTags: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `firewallPolicyInput`<sup>Optional</sup> <a name="firewallPolicyInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.firewallPolicyInput"></a>

```typescript
public readonly firewallPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.matchInput"></a>

```typescript
public readonly matchInput: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `securityProfileGroupInput`<sup>Optional</sup> <a name="securityProfileGroupInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.securityProfileGroupInput"></a>

```typescript
public readonly securityProfileGroupInput: string;
```

- *Type:* string

---

##### `targetSecureTagsInput`<sup>Optional</sup> <a name="targetSecureTagsInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.targetSecureTagsInput"></a>

```typescript
public readonly targetSecureTagsInput: IResolvable | GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a>

---

##### `tlsInspectInput`<sup>Optional</sup> <a name="tlsInspectInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tlsInspectInput"></a>

```typescript
public readonly tlsInspectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.firewallPolicy"></a>

```typescript
public readonly firewallPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `securityProfileGroup`<sup>Required</sup> <a name="securityProfileGroup" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.securityProfileGroup"></a>

```typescript
public readonly securityProfileGroup: string;
```

- *Type:* string

---

##### `tlsInspect`<sup>Required</sup> <a name="tlsInspect" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tlsInspect"></a>

```typescript
public readonly tlsInspect: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.Initializer"></a>

```typescript
import { googleComputeNetworkFirewallPolicyPacketMirroringRule } from '@cdktn/provider-google-beta'

const googleComputeNetworkFirewallPolicyPacketMirroringRuleConfig: googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.action">action</a></code> | <code>string</code> | The Action to perform when the client connection triggers the rule. Valid actions are "mirror", "do_not_mirror", "goto_next". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.direction">direction</a></code> | <code>string</code> | The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.firewallPolicy">firewallPolicy</a></code> | <code>string</code> | The firewall policy of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.priority">priority</a></code> | <code>number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.description">description</a></code> | <code>string</code> | An optional description for this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#id GoogleComputeNetworkFirewallPolicyPacketMirroringRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#project GoogleComputeNetworkFirewallPolicyPacketMirroringRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.ruleName">ruleName</a></code> | <code>string</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.securityProfileGroup">securityProfileGroup</a></code> | <code>string</code> | A fully-qualified URL of a SecurityProfile resource instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.targetSecureTags">targetSecureTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>[]</code> | target_secure_tags block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.tlsInspect">tlsInspect</a></code> | <code>boolean \| cdktn.IResolvable</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The Action to perform when the client connection triggers the rule. Valid actions are "mirror", "do_not_mirror", "goto_next".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#action GoogleComputeNetworkFirewallPolicyPacketMirroringRule#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#direction GoogleComputeNetworkFirewallPolicyPacketMirroringRule#direction}

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.firewallPolicy"></a>

```typescript
public readonly firewallPolicy: string;
```

- *Type:* string

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#firewall_policy GoogleComputeNetworkFirewallPolicyPacketMirroringRule#firewall_policy}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.match"></a>

```typescript
public readonly match: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#match GoogleComputeNetworkFirewallPolicyPacketMirroringRule#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#priority GoogleComputeNetworkFirewallPolicyPacketMirroringRule#priority}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#deletion_policy GoogleComputeNetworkFirewallPolicyPacketMirroringRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#description GoogleComputeNetworkFirewallPolicyPacketMirroringRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#disabled GoogleComputeNetworkFirewallPolicyPacketMirroringRule#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#id GoogleComputeNetworkFirewallPolicyPacketMirroringRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#project GoogleComputeNetworkFirewallPolicyPacketMirroringRule#project}.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#rule_name GoogleComputeNetworkFirewallPolicyPacketMirroringRule#rule_name}

---

##### `securityProfileGroup`<sup>Optional</sup> <a name="securityProfileGroup" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.securityProfileGroup"></a>

```typescript
public readonly securityProfileGroup: string;
```

- *Type:* string

A fully-qualified URL of a SecurityProfile resource instance.

Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group
Must be specified if action = 'mirror' and cannot be specified for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#security_profile_group GoogleComputeNetworkFirewallPolicyPacketMirroringRule#security_profile_group}

---

##### `targetSecureTags`<sup>Optional</sup> <a name="targetSecureTags" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.targetSecureTags"></a>

```typescript
public readonly targetSecureTags: IResolvable | GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>[]

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#target_secure_tags GoogleComputeNetworkFirewallPolicyPacketMirroringRule#target_secure_tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#timeouts GoogleComputeNetworkFirewallPolicyPacketMirroringRule#timeouts}

---

##### `tlsInspect`<sup>Optional</sup> <a name="tlsInspect" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig.property.tlsInspect"></a>

```typescript
public readonly tlsInspect: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Boolean flag indicating if the traffic should be TLS decrypted.

Can be set only if action = 'mirror' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#tls_inspect GoogleComputeNetworkFirewallPolicyPacketMirroringRule#tls_inspect}

---

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.Initializer"></a>

```typescript
import { googleComputeNetworkFirewallPolicyPacketMirroringRule } from '@cdktn/provider-google-beta'

const googleComputeNetworkFirewallPolicyPacketMirroringRuleMatch: googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.layer4Configs">layer4Configs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>[]</code> | layer4_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000. |

---

##### `layer4Configs`<sup>Required</sup> <a name="layer4Configs" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.layer4Configs"></a>

```typescript
public readonly layer4Configs: IResolvable | GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>[]

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#layer4_configs GoogleComputeNetworkFirewallPolicyPacketMirroringRule#layer4_configs}

---

##### `destIpRanges`<sup>Optional</sup> <a name="destIpRanges" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#dest_ip_ranges GoogleComputeNetworkFirewallPolicyPacketMirroringRule#dest_ip_ranges}

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#src_ip_ranges GoogleComputeNetworkFirewallPolicyPacketMirroringRule#src_ip_ranges}

---

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs.Initializer"></a>

```typescript
import { googleComputeNetworkFirewallPolicyPacketMirroringRule } from '@cdktn/provider-google-beta'

const googleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs: googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs.property.ports">ports</a></code> | <code>string[]</code> | An optional list of ports to which this rule applies. |

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The IP protocol to which this rule applies.

The protocol type is required when creating a firewall rule.
This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#ip_protocol GoogleComputeNetworkFirewallPolicyPacketMirroringRule#ip_protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

An optional list of ports to which this rule applies.

This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and ["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#ports GoogleComputeNetworkFirewallPolicyPacketMirroringRule#ports}

---

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags.Initializer"></a>

```typescript
import { googleComputeNetworkFirewallPolicyPacketMirroringRule } from '@cdktn/provider-google-beta'

const googleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags: googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags.property.name">name</a></code> | <code>string</code> | Name of the secure tag, created with TagManager's TagValue API. diff_suppress_func: 'tpgresource.CompareSelfLinkOrResourceName'. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the secure tag, created with TagManager's TagValue API. diff_suppress_func: 'tpgresource.CompareSelfLinkOrResourceName'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#name GoogleComputeNetworkFirewallPolicyPacketMirroringRule#name}

---

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.Initializer"></a>

```typescript
import { googleComputeNetworkFirewallPolicyPacketMirroringRule } from '@cdktn/provider-google-beta'

const googleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts: googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#create GoogleComputeNetworkFirewallPolicyPacketMirroringRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#delete GoogleComputeNetworkFirewallPolicyPacketMirroringRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#update GoogleComputeNetworkFirewallPolicyPacketMirroringRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#create GoogleComputeNetworkFirewallPolicyPacketMirroringRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#delete GoogleComputeNetworkFirewallPolicyPacketMirroringRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#update GoogleComputeNetworkFirewallPolicyPacketMirroringRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer"></a>

```typescript
import { googleComputeNetworkFirewallPolicyPacketMirroringRule } from '@cdktn/provider-google-beta'

new googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.get"></a>

```typescript
public get(index: number): GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>[]

---


### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer"></a>

```typescript
import { googleComputeNetworkFirewallPolicyPacketMirroringRule } from '@cdktn/provider-google-beta'

new googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.portsInput">portsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: string[];
```

- *Type:* string[]

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>

---


### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.Initializer"></a>

```typescript
import { googleComputeNetworkFirewallPolicyPacketMirroringRule } from '@cdktn/provider-google-beta'

new googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.putLayer4Configs">putLayer4Configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resetDestIpRanges">resetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLayer4Configs` <a name="putLayer4Configs" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.putLayer4Configs"></a>

```typescript
public putLayer4Configs(value: IResolvable | GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.putLayer4Configs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>[]

---

##### `resetDestIpRanges` <a name="resetDestIpRanges" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resetDestIpRanges"></a>

```typescript
public resetDestIpRanges(): void
```

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.resetSrcIpRanges"></a>

```typescript
public resetSrcIpRanges(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.layer4Configs">layer4Configs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.destIpRangesInput">destIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.layer4ConfigsInput">layer4ConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `layer4Configs`<sup>Required</sup> <a name="layer4Configs" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.layer4Configs"></a>

```typescript
public readonly layer4Configs: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList</a>

---

##### `destIpRangesInput`<sup>Optional</sup> <a name="destIpRangesInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.destIpRangesInput"></a>

```typescript
public readonly destIpRangesInput: string[];
```

- *Type:* string[]

---

##### `layer4ConfigsInput`<sup>Optional</sup> <a name="layer4ConfigsInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.layer4ConfigsInput"></a>

```typescript
public readonly layer4ConfigsInput: IResolvable | GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs</a>[]

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.srcIpRangesInput"></a>

```typescript
public readonly srcIpRangesInput: string[];
```

- *Type:* string[]

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch</a>

---


### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer"></a>

```typescript
import { googleComputeNetworkFirewallPolicyPacketMirroringRule } from '@cdktn/provider-google-beta'

new googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.get"></a>

```typescript
public get(index: number): GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>[]

---


### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer"></a>

```typescript
import { googleComputeNetworkFirewallPolicyPacketMirroringRule } from '@cdktn/provider-google-beta'

new googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags</a>

---


### GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference <a name="GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeNetworkFirewallPolicyPacketMirroringRule } from '@cdktn/provider-google-beta'

new googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyPacketMirroringRule.GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts">GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts</a>

---



