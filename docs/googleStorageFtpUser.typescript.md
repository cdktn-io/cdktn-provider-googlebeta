# `googleStorageFtpUser` Submodule <a name="`googleStorageFtpUser` Submodule" id="@cdktn/provider-google-beta.googleStorageFtpUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageFtpUser <a name="GoogleStorageFtpUser" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user google_storage_ftp_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer"></a>

```typescript
import { googleStorageFtpUser } from '@cdktn/provider-google-beta'

new googleStorageFtpUser.GoogleStorageFtpUser(scope: Construct, id: string, config: GoogleStorageFtpUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig">GoogleStorageFtpUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig">GoogleStorageFtpUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putStorageDirectoryMappings">putStorageDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putUserCredentials">putUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetStorageDirectoryMappings">resetStorageDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetUserCredentials">resetUserCredentials</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStorageDirectoryMappings` <a name="putStorageDirectoryMappings" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putStorageDirectoryMappings"></a>

```typescript
public putStorageDirectoryMappings(value: IResolvable | GoogleStorageFtpUserStorageDirectoryMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putStorageDirectoryMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleStorageFtpUserTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a>

---

##### `putUserCredentials` <a name="putUserCredentials" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putUserCredentials"></a>

```typescript
public putUserCredentials(value: IResolvable | GoogleStorageFtpUserUserCredentials[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putUserCredentials.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>[]

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetStorageDirectoryMappings` <a name="resetStorageDirectoryMappings" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetStorageDirectoryMappings"></a>

```typescript
public resetStorageDirectoryMappings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserCredentials` <a name="resetUserCredentials" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetUserCredentials"></a>

```typescript
public resetUserCredentials(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleStorageFtpUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isConstruct"></a>

```typescript
import { googleStorageFtpUser } from '@cdktn/provider-google-beta'

googleStorageFtpUser.GoogleStorageFtpUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformElement"></a>

```typescript
import { googleStorageFtpUser } from '@cdktn/provider-google-beta'

googleStorageFtpUser.GoogleStorageFtpUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformResource"></a>

```typescript
import { googleStorageFtpUser } from '@cdktn/provider-google-beta'

googleStorageFtpUser.GoogleStorageFtpUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport"></a>

```typescript
import { googleStorageFtpUser } from '@cdktn/provider-google-beta'

googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleStorageFtpUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleStorageFtpUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleStorageFtpUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleStorageFtpUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.storageDirectoryMappings">storageDirectoryMappings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList">GoogleStorageFtpUserStorageDirectoryMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference">GoogleStorageFtpUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userCredentials">userCredentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList">GoogleStorageFtpUserUserCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.customerServiceAccountInput">customerServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.serverIdInput">serverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.storageDirectoryMappingsInput">storageDirectoryMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userCredentialsInput">userCredentialsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.customerServiceAccount">customerServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageDirectoryMappings`<sup>Required</sup> <a name="storageDirectoryMappings" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.storageDirectoryMappings"></a>

```typescript
public readonly storageDirectoryMappings: GoogleStorageFtpUserStorageDirectoryMappingsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList">GoogleStorageFtpUserStorageDirectoryMappingsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleStorageFtpUserTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference">GoogleStorageFtpUserTimeoutsOutputReference</a>

---

##### `userCredentials`<sup>Required</sup> <a name="userCredentials" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userCredentials"></a>

```typescript
public readonly userCredentials: GoogleStorageFtpUserUserCredentialsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList">GoogleStorageFtpUserUserCredentialsList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `customerServiceAccountInput`<sup>Optional</sup> <a name="customerServiceAccountInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.customerServiceAccountInput"></a>

```typescript
public readonly customerServiceAccountInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.serverIdInput"></a>

```typescript
public readonly serverIdInput: string;
```

- *Type:* string

---

##### `storageDirectoryMappingsInput`<sup>Optional</sup> <a name="storageDirectoryMappingsInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.storageDirectoryMappingsInput"></a>

```typescript
public readonly storageDirectoryMappingsInput: IResolvable | GoogleStorageFtpUserStorageDirectoryMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleStorageFtpUserTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a>

---

##### `userCredentialsInput`<sup>Optional</sup> <a name="userCredentialsInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userCredentialsInput"></a>

```typescript
public readonly userCredentialsInput: IResolvable | GoogleStorageFtpUserUserCredentials[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>[]

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `customerServiceAccount`<sup>Required</sup> <a name="customerServiceAccount" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.customerServiceAccount"></a>

```typescript
public readonly customerServiceAccount: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageFtpUserConfig <a name="GoogleStorageFtpUserConfig" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.Initializer"></a>

```typescript
import { googleStorageFtpUser } from '@cdktn/provider-google-beta'

const googleStorageFtpUserConfig: googleStorageFtpUser.GoogleStorageFtpUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.customerServiceAccount">customerServiceAccount</a></code> | <code>string</code> | The email address of the service account associated with the user. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.location">location</a></code> | <code>string</code> | The location (region) of the Storage FTP User. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.serverId">serverId</a></code> | <code>string</code> | The ID of the server. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.userId">userId</a></code> | <code>string</code> | The unique ID for the user. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#id GoogleStorageFtpUser#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#project GoogleStorageFtpUser#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.storageDirectoryMappings">storageDirectoryMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>[]</code> | storage_directory_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.userCredentials">userCredentials</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>[]</code> | user_credentials block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `customerServiceAccount`<sup>Required</sup> <a name="customerServiceAccount" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.customerServiceAccount"></a>

```typescript
public readonly customerServiceAccount: string;
```

- *Type:* string

The email address of the service account associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#customer_service_account GoogleStorageFtpUser#customer_service_account}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location (region) of the Storage FTP User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#location GoogleStorageFtpUser#location}

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

The ID of the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#server_id GoogleStorageFtpUser#server_id}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The unique ID for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#user_id GoogleStorageFtpUser#user_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#deletion_policy GoogleStorageFtpUser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#id GoogleStorageFtpUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels that can contain user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#labels GoogleStorageFtpUser#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#project GoogleStorageFtpUser#project}.

---

##### `storageDirectoryMappings`<sup>Optional</sup> <a name="storageDirectoryMappings" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.storageDirectoryMappings"></a>

```typescript
public readonly storageDirectoryMappings: IResolvable | GoogleStorageFtpUserStorageDirectoryMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>[]

storage_directory_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#storage_directory_mappings GoogleStorageFtpUser#storage_directory_mappings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleStorageFtpUserTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#timeouts GoogleStorageFtpUser#timeouts}

---

##### `userCredentials`<sup>Optional</sup> <a name="userCredentials" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.userCredentials"></a>

```typescript
public readonly userCredentials: IResolvable | GoogleStorageFtpUserUserCredentials[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>[]

user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#user_credentials GoogleStorageFtpUser#user_credentials}

---

### GoogleStorageFtpUserStorageDirectoryMappings <a name="GoogleStorageFtpUserStorageDirectoryMappings" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.Initializer"></a>

```typescript
import { googleStorageFtpUser } from '@cdktn/provider-google-beta'

const googleStorageFtpUserStorageDirectoryMappings: googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.bucket">bucket</a></code> | <code>string</code> | The Cloud Storage bucket name. Omit the gs://. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | The path of a folder within the bucket to set as the root directory for this directory mapping. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.directory">directory</a></code> | <code>string</code> | The directory path in the virtual file system. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.permission">permission</a></code> | <code>string</code> | The access level for the directory. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The Cloud Storage bucket name. Omit the gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#bucket GoogleStorageFtpUser#bucket}

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

The path of a folder within the bucket to set as the root directory for this directory mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#bucket_prefix GoogleStorageFtpUser#bucket_prefix}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

The directory path in the virtual file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#directory GoogleStorageFtpUser#directory}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

The access level for the directory.

For read-only access, set this value to READ_ONLY. For read and write access, set this value to READ_WRITE. Possible values: ["READ_ONLY", "READ_WRITE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#permission GoogleStorageFtpUser#permission}

---

### GoogleStorageFtpUserTimeouts <a name="GoogleStorageFtpUserTimeouts" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.Initializer"></a>

```typescript
import { googleStorageFtpUser } from '@cdktn/provider-google-beta'

const googleStorageFtpUserTimeouts: googleStorageFtpUser.GoogleStorageFtpUserTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#create GoogleStorageFtpUser#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#delete GoogleStorageFtpUser#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#update GoogleStorageFtpUser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#create GoogleStorageFtpUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#delete GoogleStorageFtpUser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#update GoogleStorageFtpUser#update}.

---

### GoogleStorageFtpUserUserCredentials <a name="GoogleStorageFtpUserUserCredentials" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.Initializer"></a>

```typescript
import { googleStorageFtpUser } from '@cdktn/provider-google-beta'

const googleStorageFtpUserUserCredentials: googleStorageFtpUser.GoogleStorageFtpUserUserCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.credentialName">credentialName</a></code> | <code>string</code> | The name of the credential. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.credentialType">credentialType</a></code> | <code>string</code> | The type of the credential. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.sshPublicKeyBody">sshPublicKeyBody</a></code> | <code>string</code> | The SSH public key body. |

---

##### `credentialName`<sup>Optional</sup> <a name="credentialName" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.credentialName"></a>

```typescript
public readonly credentialName: string;
```

- *Type:* string

The name of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#credential_name GoogleStorageFtpUser#credential_name}

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

The type of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#credential_type GoogleStorageFtpUser#credential_type}

---

##### `sshPublicKeyBody`<sup>Optional</sup> <a name="sshPublicKeyBody" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.sshPublicKeyBody"></a>

```typescript
public readonly sshPublicKeyBody: string;
```

- *Type:* string

The SSH public key body.

A file either absolute or relative path should be provided which contains the ssh public key using file() interpolation in Terraform, not recommended to have key as a literal string in config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#ssh_public_key_body GoogleStorageFtpUser#ssh_public_key_body}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageFtpUserStorageDirectoryMappingsList <a name="GoogleStorageFtpUserStorageDirectoryMappingsList" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer"></a>

```typescript
import { googleStorageFtpUser } from '@cdktn/provider-google-beta'

new googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.get"></a>

```typescript
public get(index: number): GoogleStorageFtpUserStorageDirectoryMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageFtpUserStorageDirectoryMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>[]

---


### GoogleStorageFtpUserStorageDirectoryMappingsOutputReference <a name="GoogleStorageFtpUserStorageDirectoryMappingsOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer"></a>

```typescript
import { googleStorageFtpUser } from '@cdktn/provider-google-beta'

new googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetBucketPrefix"></a>

```typescript
public resetBucketPrefix(): void
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetDirectory"></a>

```typescript
public resetDirectory(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.directoryInput">directoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.directory">directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefixInput"></a>

```typescript
public readonly bucketPrefixInput: string;
```

- *Type:* string

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.directoryInput"></a>

```typescript
public readonly directoryInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageFtpUserStorageDirectoryMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>

---


### GoogleStorageFtpUserTimeoutsOutputReference <a name="GoogleStorageFtpUserTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleStorageFtpUser } from '@cdktn/provider-google-beta'

new googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageFtpUserTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a>

---


### GoogleStorageFtpUserUserCredentialsList <a name="GoogleStorageFtpUserUserCredentialsList" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer"></a>

```typescript
import { googleStorageFtpUser } from '@cdktn/provider-google-beta'

new googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.get"></a>

```typescript
public get(index: number): GoogleStorageFtpUserUserCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageFtpUserUserCredentials[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>[]

---


### GoogleStorageFtpUserUserCredentialsOutputReference <a name="GoogleStorageFtpUserUserCredentialsOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer"></a>

```typescript
import { googleStorageFtpUser } from '@cdktn/provider-google-beta'

new googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetCredentialName">resetCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetCredentialType">resetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetSshPublicKeyBody">resetSshPublicKeyBody</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialName` <a name="resetCredentialName" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetCredentialName"></a>

```typescript
public resetCredentialName(): void
```

##### `resetCredentialType` <a name="resetCredentialType" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetCredentialType"></a>

```typescript
public resetCredentialType(): void
```

##### `resetSshPublicKeyBody` <a name="resetSshPublicKeyBody" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetSshPublicKeyBody"></a>

```typescript
public resetSshPublicKeyBody(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialNameInput">credentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBodyInput">sshPublicKeyBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialName">credentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBody">sshPublicKeyBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialNameInput`<sup>Optional</sup> <a name="credentialNameInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialNameInput"></a>

```typescript
public readonly credentialNameInput: string;
```

- *Type:* string

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialTypeInput"></a>

```typescript
public readonly credentialTypeInput: string;
```

- *Type:* string

---

##### `sshPublicKeyBodyInput`<sup>Optional</sup> <a name="sshPublicKeyBodyInput" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBodyInput"></a>

```typescript
public readonly sshPublicKeyBodyInput: string;
```

- *Type:* string

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialName"></a>

```typescript
public readonly credentialName: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `sshPublicKeyBody`<sup>Required</sup> <a name="sshPublicKeyBody" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBody"></a>

```typescript
public readonly sshPublicKeyBody: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageFtpUserUserCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>

---



