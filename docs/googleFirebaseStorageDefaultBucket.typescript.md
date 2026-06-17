# `googleFirebaseStorageDefaultBucket` Submodule <a name="`googleFirebaseStorageDefaultBucket` Submodule" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseStorageDefaultBucket <a name="GoogleFirebaseStorageDefaultBucket" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_storage_default_bucket google_firebase_storage_default_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer"></a>

```typescript
import { googleFirebaseStorageDefaultBucket } from '@cdktn/provider-google-beta'

new googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket(scope: Construct, id: string, config: GoogleFirebaseStorageDefaultBucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig">GoogleFirebaseStorageDefaultBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig">GoogleFirebaseStorageDefaultBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleFirebaseStorageDefaultBucketTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseStorageDefaultBucket resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isConstruct"></a>

```typescript
import { googleFirebaseStorageDefaultBucket } from '@cdktn/provider-google-beta'

googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformElement"></a>

```typescript
import { googleFirebaseStorageDefaultBucket } from '@cdktn/provider-google-beta'

googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformResource"></a>

```typescript
import { googleFirebaseStorageDefaultBucket } from '@cdktn/provider-google-beta'

googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport"></a>

```typescript
import { googleFirebaseStorageDefaultBucket } from '@cdktn/provider-google-beta'

googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleFirebaseStorageDefaultBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseStorageDefaultBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseStorageDefaultBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_storage_default_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseStorageDefaultBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.bucket">bucket</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList">GoogleFirebaseStorageDefaultBucketBucketList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference">GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.bucket"></a>

```typescript
public readonly bucket: GoogleFirebaseStorageDefaultBucketBucketList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList">GoogleFirebaseStorageDefaultBucketBucketList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference">GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleFirebaseStorageDefaultBucketTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseStorageDefaultBucketBucket <a name="GoogleFirebaseStorageDefaultBucketBucket" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket.Initializer"></a>

```typescript
import { googleFirebaseStorageDefaultBucket } from '@cdktn/provider-google-beta'

const googleFirebaseStorageDefaultBucketBucket: googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket = { ... }
```


### GoogleFirebaseStorageDefaultBucketConfig <a name="GoogleFirebaseStorageDefaultBucketConfig" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.Initializer"></a>

```typescript
import { googleFirebaseStorageDefaultBucket } from '@cdktn/provider-google-beta'

const googleFirebaseStorageDefaultBucketConfig: googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.location">location</a></code> | <code>string</code> | The ID of the location where the default Google Cloud Storage bucket will be created. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_storage_default_bucket#id GoogleFirebaseStorageDefaultBucket#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_storage_default_bucket#project GoogleFirebaseStorageDefaultBucket#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The ID of the location where the default Google Cloud Storage bucket will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_storage_default_bucket#location GoogleFirebaseStorageDefaultBucket#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_storage_default_bucket#deletion_policy GoogleFirebaseStorageDefaultBucket#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_storage_default_bucket#id GoogleFirebaseStorageDefaultBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_storage_default_bucket#project GoogleFirebaseStorageDefaultBucket#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseStorageDefaultBucketTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_storage_default_bucket#timeouts GoogleFirebaseStorageDefaultBucket#timeouts}

---

### GoogleFirebaseStorageDefaultBucketTimeouts <a name="GoogleFirebaseStorageDefaultBucketTimeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.Initializer"></a>

```typescript
import { googleFirebaseStorageDefaultBucket } from '@cdktn/provider-google-beta'

const googleFirebaseStorageDefaultBucketTimeouts: googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_storage_default_bucket#create GoogleFirebaseStorageDefaultBucket#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_storage_default_bucket#delete GoogleFirebaseStorageDefaultBucket#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_storage_default_bucket#create GoogleFirebaseStorageDefaultBucket#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_storage_default_bucket#delete GoogleFirebaseStorageDefaultBucket#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseStorageDefaultBucketBucketList <a name="GoogleFirebaseStorageDefaultBucketBucketList" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer"></a>

```typescript
import { googleFirebaseStorageDefaultBucket } from '@cdktn/provider-google-beta'

new googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.get"></a>

```typescript
public get(index: number): GoogleFirebaseStorageDefaultBucketBucketOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseStorageDefaultBucketBucketOutputReference <a name="GoogleFirebaseStorageDefaultBucketBucketOutputReference" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer"></a>

```typescript
import { googleFirebaseStorageDefaultBucket } from '@cdktn/provider-google-beta'

new googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.bucketId">bucketId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket">GoogleFirebaseStorageDefaultBucketBucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.bucketId"></a>

```typescript
public readonly bucketId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseStorageDefaultBucketBucket;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket">GoogleFirebaseStorageDefaultBucketBucket</a>

---


### GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference <a name="GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseStorageDefaultBucket } from '@cdktn/provider-google-beta'

new googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseStorageDefaultBucketTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a>

---



