# `googleComputeAttachedDisk` Submodule <a name="`googleComputeAttachedDisk` Submodule" id="@cdktn/provider-google-beta.googleComputeAttachedDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeAttachedDisk <a name="GoogleComputeAttachedDisk" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk google_compute_attached_disk}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer"></a>

```typescript
import { googleComputeAttachedDisk } from '@cdktn/provider-google-beta'

new googleComputeAttachedDisk.GoogleComputeAttachedDisk(scope: Construct, id: string, config: GoogleComputeAttachedDiskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig">GoogleComputeAttachedDiskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig">GoogleComputeAttachedDiskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetInterface">resetInterface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeAttachedDiskTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts">GoogleComputeAttachedDiskTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterface` <a name="resetInterface" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetInterface"></a>

```typescript
public resetInterface(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeAttachedDisk resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isConstruct"></a>

```typescript
import { googleComputeAttachedDisk } from '@cdktn/provider-google-beta'

googleComputeAttachedDisk.GoogleComputeAttachedDisk.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isTerraformElement"></a>

```typescript
import { googleComputeAttachedDisk } from '@cdktn/provider-google-beta'

googleComputeAttachedDisk.GoogleComputeAttachedDisk.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isTerraformResource"></a>

```typescript
import { googleComputeAttachedDisk } from '@cdktn/provider-google-beta'

googleComputeAttachedDisk.GoogleComputeAttachedDisk.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.generateConfigForImport"></a>

```typescript
import { googleComputeAttachedDisk } from '@cdktn/provider-google-beta'

googleComputeAttachedDisk.GoogleComputeAttachedDisk.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleComputeAttachedDisk resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeAttachedDisk to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeAttachedDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeAttachedDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference">GoogleComputeAttachedDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.diskInput">diskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.interfaceInput">interfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts">GoogleComputeAttachedDiskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.disk">disk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.interface">interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeAttachedDiskTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference">GoogleComputeAttachedDiskTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.diskInput"></a>

```typescript
public readonly diskInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.interfaceInput"></a>

```typescript
public readonly interfaceInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeAttachedDiskTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts">GoogleComputeAttachedDiskTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.disk"></a>

```typescript
public readonly disk: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeAttachedDiskConfig <a name="GoogleComputeAttachedDiskConfig" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.Initializer"></a>

```typescript
import { googleComputeAttachedDisk } from '@cdktn/provider-google-beta'

const googleComputeAttachedDiskConfig: googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.disk">disk</a></code> | <code>string</code> | name or self_link of the disk that will be attached. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.instance">instance</a></code> | <code>string</code> | name or self_link of the compute instance that the disk will be attached to. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.deviceName">deviceName</a></code> | <code>string</code> | Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk#id GoogleComputeAttachedDisk#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.interface">interface</a></code> | <code>string</code> | The disk interface used for attaching this disk. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.mode">mode</a></code> | <code>string</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.project">project</a></code> | <code>string</code> | The project that the referenced compute instance is a part of. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts">GoogleComputeAttachedDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.zone">zone</a></code> | <code>string</code> | The zone that the referenced compute instance is located within. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.disk"></a>

```typescript
public readonly disk: string;
```

- *Type:* string

name or self_link of the disk that will be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk#disk GoogleComputeAttachedDisk#disk}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

name or self_link of the compute instance that the disk will be attached to.

If the self_link is provided then zone and project are extracted from the self link. If only the name is used then zone and project must be defined as properties on the resource or provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk#instance GoogleComputeAttachedDisk#instance}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk#deletion_policy GoogleComputeAttachedDisk#deletion_policy}

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance.

This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disks-x, where x is a number assigned by Google Compute Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk#device_name GoogleComputeAttachedDisk#device_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk#id GoogleComputeAttachedDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

The disk interface used for attaching this disk.

One of SCSI or NVME. (This field is only used for specific cases, please don't specify this field without advice from Google.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk#interface GoogleComputeAttachedDisk#interface}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If not specified, the default is to attach the disk in READ_WRITE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk#mode GoogleComputeAttachedDisk#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project that the referenced compute instance is a part of.

If instance is referenced by its self_link the project defined in the link will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk#project GoogleComputeAttachedDisk#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeAttachedDiskTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts">GoogleComputeAttachedDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk#timeouts GoogleComputeAttachedDisk#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The zone that the referenced compute instance is located within.

If instance is referenced by its self_link the zone defined in the link will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk#zone GoogleComputeAttachedDisk#zone}

---

### GoogleComputeAttachedDiskTimeouts <a name="GoogleComputeAttachedDiskTimeouts" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts.Initializer"></a>

```typescript
import { googleComputeAttachedDisk } from '@cdktn/provider-google-beta'

const googleComputeAttachedDiskTimeouts: googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk#create GoogleComputeAttachedDisk#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk#delete GoogleComputeAttachedDisk#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk#create GoogleComputeAttachedDisk#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_attached_disk#delete GoogleComputeAttachedDisk#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeAttachedDiskTimeoutsOutputReference <a name="GoogleComputeAttachedDiskTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeAttachedDisk } from '@cdktn/provider-google-beta'

new googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts">GoogleComputeAttachedDiskTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeAttachedDiskTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts">GoogleComputeAttachedDiskTimeouts</a>

---



