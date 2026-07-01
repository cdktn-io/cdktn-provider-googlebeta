# `googleComputeRegionNetworkFirewallPolicyIamMember` Submodule <a name="`googleComputeRegionNetworkFirewallPolicyIamMember` Submodule" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionNetworkFirewallPolicyIamMember <a name="GoogleComputeRegionNetworkFirewallPolicyIamMember" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member google_compute_region_network_firewall_policy_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyIamMember } from '@cdktn/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember(scope: Construct, id: string, config: GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig">GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig">GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.putCondition"></a>

```typescript
public putCondition(value: GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition">GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeRegionNetworkFirewallPolicyIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isConstruct"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyIamMember } from '@cdktn/provider-google-beta'

googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isTerraformElement"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyIamMember } from '@cdktn/provider-google-beta'

googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isTerraformResource"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyIamMember } from '@cdktn/provider-google-beta'

googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyIamMember } from '@cdktn/provider-google-beta'

googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleComputeRegionNetworkFirewallPolicyIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionNetworkFirewallPolicyIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionNetworkFirewallPolicyIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionNetworkFirewallPolicyIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference">GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition">GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.condition"></a>

```typescript
public readonly condition: GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference">GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition">GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition <a name="GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyIamMember } from '@cdktn/provider-google-beta'

const googleComputeRegionNetworkFirewallPolicyIamMemberCondition: googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#expression GoogleComputeRegionNetworkFirewallPolicyIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#title GoogleComputeRegionNetworkFirewallPolicyIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#description GoogleComputeRegionNetworkFirewallPolicyIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#expression GoogleComputeRegionNetworkFirewallPolicyIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#title GoogleComputeRegionNetworkFirewallPolicyIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#description GoogleComputeRegionNetworkFirewallPolicyIamMember#description}.

---

### GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig <a name="GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyIamMember } from '@cdktn/provider-google-beta'

const googleComputeRegionNetworkFirewallPolicyIamMemberConfig: googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#member GoogleComputeRegionNetworkFirewallPolicyIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#name GoogleComputeRegionNetworkFirewallPolicyIamMember#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#role GoogleComputeRegionNetworkFirewallPolicyIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition">GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#id GoogleComputeRegionNetworkFirewallPolicyIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#project GoogleComputeRegionNetworkFirewallPolicyIamMember#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#region GoogleComputeRegionNetworkFirewallPolicyIamMember#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#member GoogleComputeRegionNetworkFirewallPolicyIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#name GoogleComputeRegionNetworkFirewallPolicyIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#role GoogleComputeRegionNetworkFirewallPolicyIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition">GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#condition GoogleComputeRegionNetworkFirewallPolicyIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#id GoogleComputeRegionNetworkFirewallPolicyIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#project GoogleComputeRegionNetworkFirewallPolicyIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#region GoogleComputeRegionNetworkFirewallPolicyIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyIamMember } from '@cdktn/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition">GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition">GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition</a>

---



