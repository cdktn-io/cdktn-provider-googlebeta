# `googleComputeOrganizationSnapshotRecycleBinPolicy` Submodule <a name="`googleComputeOrganizationSnapshotRecycleBinPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeOrganizationSnapshotRecycleBinPolicy <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy google_compute_organization_snapshot_recycle_bin_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy(scope: Construct, id: string, config: GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig">GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig">GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putRules"></a>

```typescript
public putRules(value: IResolvable | GoogleComputeOrganizationSnapshotRecycleBinPolicyRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetRules"></a>

```typescript
public resetRules(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeOrganizationSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleComputeOrganizationSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeOrganizationSnapshotRecycleBinPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeOrganizationSnapshotRecycleBinPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeOrganizationSnapshotRecycleBinPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.systemRules">systemRules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organization">organization</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rules"></a>

```typescript
public readonly rules: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList</a>

---

##### `systemRules`<sup>Required</sup> <a name="systemRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.systemRules"></a>

```typescript
public readonly systemRules: GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | GoogleComputeOrganizationSnapshotRecycleBinPolicyRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.Initializer"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

const googleComputeOrganizationSnapshotRecycleBinPolicyConfig: googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.organization">organization</a></code> | <code>string</code> | The organization ID for this request (e.g., "organizations/1234"). |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#id GoogleComputeOrganizationSnapshotRecycleBinPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>[]</code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The organization ID for this request (e.g., "organizations/1234").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#organization GoogleComputeOrganizationSnapshotRecycleBinPolicy#organization}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#id GoogleComputeOrganizationSnapshotRecycleBinPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | GoogleComputeOrganizationSnapshotRecycleBinPolicyRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#rules GoogleComputeOrganizationSnapshotRecycleBinPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#timeouts GoogleComputeOrganizationSnapshotRecycleBinPolicy#timeouts}

---

### GoogleComputeOrganizationSnapshotRecycleBinPolicyRules <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.Initializer"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

const googleComputeOrganizationSnapshotRecycleBinPolicyRules: googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#name GoogleComputeOrganizationSnapshotRecycleBinPolicy#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.standardSnapshots">standardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | standard_snapshots block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#name GoogleComputeOrganizationSnapshotRecycleBinPolicy#name}.

---

##### `standardSnapshots`<sup>Optional</sup> <a name="standardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.standardSnapshots"></a>

```typescript
public readonly standardSnapshots: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

standard_snapshots block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#standard_snapshots GoogleComputeOrganizationSnapshotRecycleBinPolicy#standard_snapshots}

---

### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots.Initializer"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

const googleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots: googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays">retentionDurationDays</a></code> | <code>number</code> | The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin. |

---

##### `retentionDurationDays`<sup>Optional</sup> <a name="retentionDurationDays" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays"></a>

```typescript
public readonly retentionDurationDays: number;
```

- *Type:* number

The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#retention_duration_days GoogleComputeOrganizationSnapshotRecycleBinPolicy#retention_duration_days}

---

### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules.Initializer"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

const googleComputeOrganizationSnapshotRecycleBinPolicySystemRules: googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules = { ... }
```


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots.Initializer"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

const googleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots: googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots = { ... }
```


### GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.Initializer"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

const googleComputeOrganizationSnapshotRecycleBinPolicyTimeouts: googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#create GoogleComputeOrganizationSnapshotRecycleBinPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#delete GoogleComputeOrganizationSnapshotRecycleBinPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#update GoogleComputeOrganizationSnapshotRecycleBinPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#create GoogleComputeOrganizationSnapshotRecycleBinPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#delete GoogleComputeOrganizationSnapshotRecycleBinPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#update GoogleComputeOrganizationSnapshotRecycleBinPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.get"></a>

```typescript
public get(index: number): GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeOrganizationSnapshotRecycleBinPolicyRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>[]

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots">putStandardSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots">resetStandardSnapshots</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStandardSnapshots` <a name="putStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots"></a>

```typescript
public putStandardSnapshots(value: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---

##### `resetStandardSnapshots` <a name="resetStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots"></a>

```typescript
public resetStandardSnapshots(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots">standardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput">standardSnapshotsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `standardSnapshots`<sup>Required</sup> <a name="standardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots"></a>

```typescript
public readonly standardSnapshots: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `standardSnapshotsInput`<sup>Optional</sup> <a name="standardSnapshotsInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput"></a>

```typescript
public readonly standardSnapshotsInput: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeOrganizationSnapshotRecycleBinPolicyRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays">resetRetentionDurationDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionDurationDays` <a name="resetRetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays"></a>

```typescript
public resetRetentionDurationDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput">retentionDurationDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays">retentionDurationDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionDurationDaysInput`<sup>Optional</sup> <a name="retentionDurationDaysInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput"></a>

```typescript
public readonly retentionDurationDaysInput: number;
```

- *Type:* number

---

##### `retentionDurationDays`<sup>Required</sup> <a name="retentionDurationDays" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```typescript
public readonly retentionDurationDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.get"></a>

```typescript
public get(index: number): GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots">standardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `standardSnapshots`<sup>Required</sup> <a name="standardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots"></a>

```typescript
public readonly standardSnapshots: GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get"></a>

```typescript
public get(index: number): GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays">retentionDurationDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionDurationDays`<sup>Required</sup> <a name="retentionDurationDays" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```typescript
public readonly retentionDurationDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeOrganizationSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

---



