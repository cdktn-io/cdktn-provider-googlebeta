# `googleComputeZoneVmExtensionPolicy` Submodule <a name="`googleComputeZoneVmExtensionPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeZoneVmExtensionPolicy <a name="GoogleComputeZoneVmExtensionPolicy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy google_compute_zone_vm_extension_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer"></a>

```typescript
import { googleComputeZoneVmExtensionPolicy } from '@cdktn/provider-google-beta'

new googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy(scope: Construct, id: string, config: GoogleComputeZoneVmExtensionPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig">GoogleComputeZoneVmExtensionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig">GoogleComputeZoneVmExtensionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putExtensionPolicies">putExtensionPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putInstanceSelectors">putInstanceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetInstanceSelectors">resetInstanceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExtensionPolicies` <a name="putExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putExtensionPolicies"></a>

```typescript
public putExtensionPolicies(value: IResolvable | GoogleComputeZoneVmExtensionPolicyExtensionPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putExtensionPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>[]

---

##### `putInstanceSelectors` <a name="putInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putInstanceSelectors"></a>

```typescript
public putInstanceSelectors(value: IResolvable | GoogleComputeZoneVmExtensionPolicyInstanceSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putInstanceSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeZoneVmExtensionPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInstanceSelectors` <a name="resetInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetInstanceSelectors"></a>

```typescript
public resetInstanceSelectors(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeZoneVmExtensionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isConstruct"></a>

```typescript
import { googleComputeZoneVmExtensionPolicy } from '@cdktn/provider-google-beta'

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformElement"></a>

```typescript
import { googleComputeZoneVmExtensionPolicy } from '@cdktn/provider-google-beta'

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformResource"></a>

```typescript
import { googleComputeZoneVmExtensionPolicy } from '@cdktn/provider-google-beta'

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport"></a>

```typescript
import { googleComputeZoneVmExtensionPolicy } from '@cdktn/provider-google-beta'

googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleComputeZoneVmExtensionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeZoneVmExtensionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeZoneVmExtensionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeZoneVmExtensionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.extensionPolicies">extensionPolicies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList">GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.instanceSelectors">instanceSelectors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.managedByGlobal">managedByGlobal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference">GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.extensionPoliciesInput">extensionPoliciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.instanceSelectorsInput">instanceSelectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `extensionPolicies`<sup>Required</sup> <a name="extensionPolicies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.extensionPolicies"></a>

```typescript
public readonly extensionPolicies: GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList">GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceSelectors`<sup>Required</sup> <a name="instanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.instanceSelectors"></a>

```typescript
public readonly instanceSelectors: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `managedByGlobal`<sup>Required</sup> <a name="managedByGlobal" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.managedByGlobal"></a>

```typescript
public readonly managedByGlobal: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference">GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `extensionPoliciesInput`<sup>Optional</sup> <a name="extensionPoliciesInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.extensionPoliciesInput"></a>

```typescript
public readonly extensionPoliciesInput: IResolvable | GoogleComputeZoneVmExtensionPolicyExtensionPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>[]

---

##### `instanceSelectorsInput`<sup>Optional</sup> <a name="instanceSelectorsInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.instanceSelectorsInput"></a>

```typescript
public readonly instanceSelectorsInput: IResolvable | GoogleComputeZoneVmExtensionPolicyInstanceSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeZoneVmExtensionPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeZoneVmExtensionPolicyConfig <a name="GoogleComputeZoneVmExtensionPolicyConfig" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.Initializer"></a>

```typescript
import { googleComputeZoneVmExtensionPolicy } from '@cdktn/provider-google-beta'

const googleComputeZoneVmExtensionPolicyConfig: googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.extensionPolicies">extensionPolicies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>[]</code> | extension_policies block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. Provided by the client when the resource is created. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.zone">zone</a></code> | <code>string</code> | Name of the zone for this request. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.instanceSelectors">instanceSelectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>[]</code> | instance_selectors block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.priority">priority</a></code> | <code>number</code> | Priority of this policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#project GoogleComputeZoneVmExtensionPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `extensionPolicies`<sup>Required</sup> <a name="extensionPolicies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.extensionPolicies"></a>

```typescript
public readonly extensionPolicies: IResolvable | GoogleComputeZoneVmExtensionPolicyExtensionPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>[]

extension_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#extension_policies GoogleComputeZoneVmExtensionPolicy#extension_policies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource. Provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#name GoogleComputeZoneVmExtensionPolicy#name}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Name of the zone for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#zone GoogleComputeZoneVmExtensionPolicy#zone}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#deletion_policy GoogleComputeZoneVmExtensionPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#description GoogleComputeZoneVmExtensionPolicy#description}

---

##### `instanceSelectors`<sup>Optional</sup> <a name="instanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.instanceSelectors"></a>

```typescript
public readonly instanceSelectors: IResolvable | GoogleComputeZoneVmExtensionPolicyInstanceSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>[]

instance_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#instance_selectors GoogleComputeZoneVmExtensionPolicy#instance_selectors}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Priority of this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#priority GoogleComputeZoneVmExtensionPolicy#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#project GoogleComputeZoneVmExtensionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeZoneVmExtensionPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#timeouts GoogleComputeZoneVmExtensionPolicy#timeouts}

---

### GoogleComputeZoneVmExtensionPolicyExtensionPolicies <a name="GoogleComputeZoneVmExtensionPolicyExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.Initializer"></a>

```typescript
import { googleComputeZoneVmExtensionPolicy } from '@cdktn/provider-google-beta'

const googleComputeZoneVmExtensionPolicyExtensionPolicies: googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.extensionName">extensionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#extension_name GoogleComputeZoneVmExtensionPolicy#extension_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.pinnedVersion">pinnedVersion</a></code> | <code>string</code> | The specific version of the extension to install. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.stringConfig">stringConfig</a></code> | <code>string</code> | String-based configuration data for the extension. |

---

##### `extensionName`<sup>Required</sup> <a name="extensionName" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.extensionName"></a>

```typescript
public readonly extensionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#extension_name GoogleComputeZoneVmExtensionPolicy#extension_name}.

---

##### `pinnedVersion`<sup>Optional</sup> <a name="pinnedVersion" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.pinnedVersion"></a>

```typescript
public readonly pinnedVersion: string;
```

- *Type:* string

The specific version of the extension to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#pinned_version GoogleComputeZoneVmExtensionPolicy#pinned_version}

---

##### `stringConfig`<sup>Optional</sup> <a name="stringConfig" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.stringConfig"></a>

```typescript
public readonly stringConfig: string;
```

- *Type:* string

String-based configuration data for the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#string_config GoogleComputeZoneVmExtensionPolicy#string_config}

---

### GoogleComputeZoneVmExtensionPolicyInstanceSelectors <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors.Initializer"></a>

```typescript
import { googleComputeZoneVmExtensionPolicy } from '@cdktn/provider-google-beta'

const googleComputeZoneVmExtensionPolicyInstanceSelectors: googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors.property.labelSelector">labelSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | label_selector block. |

---

##### `labelSelector`<sup>Optional</sup> <a name="labelSelector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors.property.labelSelector"></a>

```typescript
public readonly labelSelector: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

label_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#label_selector GoogleComputeZoneVmExtensionPolicy#label_selector}

---

### GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.Initializer"></a>

```typescript
import { googleComputeZoneVmExtensionPolicy } from '@cdktn/provider-google-beta'

const googleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector: googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels">inclusionLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of key-value pairs representing VM labels. |

---

##### `inclusionLabels`<sup>Optional</sup> <a name="inclusionLabels" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels"></a>

```typescript
public readonly inclusionLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of key-value pairs representing VM labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#inclusion_labels GoogleComputeZoneVmExtensionPolicy#inclusion_labels}

---

### GoogleComputeZoneVmExtensionPolicyTimeouts <a name="GoogleComputeZoneVmExtensionPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.Initializer"></a>

```typescript
import { googleComputeZoneVmExtensionPolicy } from '@cdktn/provider-google-beta'

const googleComputeZoneVmExtensionPolicyTimeouts: googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#create GoogleComputeZoneVmExtensionPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#delete GoogleComputeZoneVmExtensionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#update GoogleComputeZoneVmExtensionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#create GoogleComputeZoneVmExtensionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#delete GoogleComputeZoneVmExtensionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#update GoogleComputeZoneVmExtensionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList <a name="GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer"></a>

```typescript
import { googleComputeZoneVmExtensionPolicy } from '@cdktn/provider-google-beta'

new googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.get"></a>

```typescript
public get(index: number): GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeZoneVmExtensionPolicyExtensionPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>[]

---


### GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference <a name="GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer"></a>

```typescript
import { googleComputeZoneVmExtensionPolicy } from '@cdktn/provider-google-beta'

new googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion">resetPinnedVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig">resetStringConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPinnedVersion` <a name="resetPinnedVersion" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion"></a>

```typescript
public resetPinnedVersion(): void
```

##### `resetStringConfig` <a name="resetStringConfig" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig"></a>

```typescript
public resetStringConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput">extensionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput">pinnedVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput">stringConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName">extensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion">pinnedVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig">stringConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extensionNameInput`<sup>Optional</sup> <a name="extensionNameInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput"></a>

```typescript
public readonly extensionNameInput: string;
```

- *Type:* string

---

##### `pinnedVersionInput`<sup>Optional</sup> <a name="pinnedVersionInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput"></a>

```typescript
public readonly pinnedVersionInput: string;
```

- *Type:* string

---

##### `stringConfigInput`<sup>Optional</sup> <a name="stringConfigInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput"></a>

```typescript
public readonly stringConfigInput: string;
```

- *Type:* string

---

##### `extensionName`<sup>Required</sup> <a name="extensionName" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName"></a>

```typescript
public readonly extensionName: string;
```

- *Type:* string

---

##### `pinnedVersion`<sup>Required</sup> <a name="pinnedVersion" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion"></a>

```typescript
public readonly pinnedVersion: string;
```

- *Type:* string

---

##### `stringConfig`<sup>Required</sup> <a name="stringConfig" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig"></a>

```typescript
public readonly stringConfig: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeZoneVmExtensionPolicyExtensionPolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>

---


### GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer"></a>

```typescript
import { googleComputeZoneVmExtensionPolicy } from '@cdktn/provider-google-beta'

new googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels">resetInclusionLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInclusionLabels` <a name="resetInclusionLabels" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels"></a>

```typescript
public resetInclusionLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput">inclusionLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels">inclusionLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inclusionLabelsInput`<sup>Optional</sup> <a name="inclusionLabelsInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput"></a>

```typescript
public readonly inclusionLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `inclusionLabels`<sup>Required</sup> <a name="inclusionLabels" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels"></a>

```typescript
public readonly inclusionLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---


### GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer"></a>

```typescript
import { googleComputeZoneVmExtensionPolicy } from '@cdktn/provider-google-beta'

new googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.get"></a>

```typescript
public get(index: number): GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeZoneVmExtensionPolicyInstanceSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>[]

---


### GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer"></a>

```typescript
import { googleComputeZoneVmExtensionPolicy } from '@cdktn/provider-google-beta'

new googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector">putLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector">resetLabelSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabelSelector` <a name="putLabelSelector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector"></a>

```typescript
public putLabelSelector(value: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `resetLabelSelector` <a name="resetLabelSelector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector"></a>

```typescript
public resetLabelSelector(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector">labelSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput">labelSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector"></a>

```typescript
public readonly labelSelector: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a>

---

##### `labelSelectorInput`<sup>Optional</sup> <a name="labelSelectorInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput"></a>

```typescript
public readonly labelSelectorInput: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeZoneVmExtensionPolicyInstanceSelectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>

---


### GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference <a name="GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeZoneVmExtensionPolicy } from '@cdktn/provider-google-beta'

new googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeZoneVmExtensionPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

---



