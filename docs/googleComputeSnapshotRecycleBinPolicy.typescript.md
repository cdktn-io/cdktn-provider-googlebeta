# `googleComputeSnapshotRecycleBinPolicy` Submodule <a name="`googleComputeSnapshotRecycleBinPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeSnapshotRecycleBinPolicy <a name="GoogleComputeSnapshotRecycleBinPolicy" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy google_compute_snapshot_recycle_bin_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy(scope: Construct, id: string, config?: GoogleComputeSnapshotRecycleBinPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig">GoogleComputeSnapshotRecycleBinPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig">GoogleComputeSnapshotRecycleBinPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putRules"></a>

```typescript
public putRules(value: IResolvable | GoogleComputeSnapshotRecycleBinPolicyRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeSnapshotRecycleBinPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetRules"></a>

```typescript
public resetRules(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isConstruct"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformElement"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformResource"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleComputeSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeSnapshotRecycleBinPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeSnapshotRecycleBinPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeSnapshotRecycleBinPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList">GoogleComputeSnapshotRecycleBinPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.systemRules">systemRules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList">GoogleComputeSnapshotRecycleBinPolicySystemRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.rules"></a>

```typescript
public readonly rules: GoogleComputeSnapshotRecycleBinPolicyRulesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList">GoogleComputeSnapshotRecycleBinPolicyRulesList</a>

---

##### `systemRules`<sup>Required</sup> <a name="systemRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.systemRules"></a>

```typescript
public readonly systemRules: GoogleComputeSnapshotRecycleBinPolicySystemRulesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList">GoogleComputeSnapshotRecycleBinPolicySystemRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | GoogleComputeSnapshotRecycleBinPolicyRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeSnapshotRecycleBinPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeSnapshotRecycleBinPolicyConfig <a name="GoogleComputeSnapshotRecycleBinPolicyConfig" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.Initializer"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

const googleComputeSnapshotRecycleBinPolicyConfig: googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#id GoogleComputeSnapshotRecycleBinPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#project GoogleComputeSnapshotRecycleBinPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>[]</code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#id GoogleComputeSnapshotRecycleBinPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#project GoogleComputeSnapshotRecycleBinPolicy#project}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | GoogleComputeSnapshotRecycleBinPolicyRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#rules GoogleComputeSnapshotRecycleBinPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeSnapshotRecycleBinPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#timeouts GoogleComputeSnapshotRecycleBinPolicy#timeouts}

---

### GoogleComputeSnapshotRecycleBinPolicyRules <a name="GoogleComputeSnapshotRecycleBinPolicyRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.Initializer"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

const googleComputeSnapshotRecycleBinPolicyRules: googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#name GoogleComputeSnapshotRecycleBinPolicy#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.property.standardSnapshots">standardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | standard_snapshots block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#name GoogleComputeSnapshotRecycleBinPolicy#name}.

---

##### `standardSnapshots`<sup>Optional</sup> <a name="standardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.property.standardSnapshots"></a>

```typescript
public readonly standardSnapshots: GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

standard_snapshots block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#standard_snapshots GoogleComputeSnapshotRecycleBinPolicy#standard_snapshots}

---

### GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots <a name="GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots.Initializer"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

const googleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots: googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays">retentionDurationDays</a></code> | <code>number</code> | The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin. |

---

##### `retentionDurationDays`<sup>Optional</sup> <a name="retentionDurationDays" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays"></a>

```typescript
public readonly retentionDurationDays: number;
```

- *Type:* number

The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#retention_duration_days GoogleComputeSnapshotRecycleBinPolicy#retention_duration_days}

---

### GoogleComputeSnapshotRecycleBinPolicySystemRules <a name="GoogleComputeSnapshotRecycleBinPolicySystemRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules.Initializer"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

const googleComputeSnapshotRecycleBinPolicySystemRules: googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules = { ... }
```


### GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots.Initializer"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

const googleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots: googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots = { ... }
```


### GoogleComputeSnapshotRecycleBinPolicyTimeouts <a name="GoogleComputeSnapshotRecycleBinPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.Initializer"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

const googleComputeSnapshotRecycleBinPolicyTimeouts: googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#create GoogleComputeSnapshotRecycleBinPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#delete GoogleComputeSnapshotRecycleBinPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#update GoogleComputeSnapshotRecycleBinPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#create GoogleComputeSnapshotRecycleBinPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#delete GoogleComputeSnapshotRecycleBinPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#update GoogleComputeSnapshotRecycleBinPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeSnapshotRecycleBinPolicyRulesList <a name="GoogleComputeSnapshotRecycleBinPolicyRulesList" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.get"></a>

```typescript
public get(index: number): GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeSnapshotRecycleBinPolicyRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>[]

---


### GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots">putStandardSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots">resetStandardSnapshots</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStandardSnapshots` <a name="putStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots"></a>

```typescript
public putStandardSnapshots(value: GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---

##### `resetStandardSnapshots` <a name="resetStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots"></a>

```typescript
public resetStandardSnapshots(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots">standardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput">standardSnapshotsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `standardSnapshots`<sup>Required</sup> <a name="standardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots"></a>

```typescript
public readonly standardSnapshots: GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `standardSnapshotsInput`<sup>Optional</sup> <a name="standardSnapshotsInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput"></a>

```typescript
public readonly standardSnapshotsInput: GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeSnapshotRecycleBinPolicyRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>

---


### GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays">resetRetentionDurationDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionDurationDays` <a name="resetRetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays"></a>

```typescript
public resetRetentionDurationDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput">retentionDurationDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays">retentionDurationDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionDurationDaysInput`<sup>Optional</sup> <a name="retentionDurationDaysInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput"></a>

```typescript
public readonly retentionDurationDaysInput: number;
```

- *Type:* number

---

##### `retentionDurationDays`<sup>Required</sup> <a name="retentionDurationDays" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```typescript
public readonly retentionDurationDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---


### GoogleComputeSnapshotRecycleBinPolicySystemRulesList <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesList" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.get"></a>

```typescript
public get(index: number): GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots">standardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules">GoogleComputeSnapshotRecycleBinPolicySystemRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `standardSnapshots`<sup>Required</sup> <a name="standardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots"></a>

```typescript
public readonly standardSnapshots: GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeSnapshotRecycleBinPolicySystemRules;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules">GoogleComputeSnapshotRecycleBinPolicySystemRules</a>

---


### GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get"></a>

```typescript
public get(index: number): GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays">retentionDurationDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionDurationDays`<sup>Required</sup> <a name="retentionDurationDays" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```typescript
public readonly retentionDurationDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a>

---


### GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeSnapshotRecycleBinPolicy } from '@cdktn/provider-google-beta'

new googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeSnapshotRecycleBinPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a>

---



