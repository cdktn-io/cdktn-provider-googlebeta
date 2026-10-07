# `googleStorageFtpServer` Submodule <a name="`googleStorageFtpServer` Submodule" id="@cdktn/provider-google-beta.googleStorageFtpServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageFtpServer <a name="GoogleStorageFtpServer" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server google_storage_ftp_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

new googleStorageFtpServer.GoogleStorageFtpServer(scope: Construct, id: string, config: GoogleStorageFtpServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig">GoogleStorageFtpServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig">GoogleStorageFtpServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putExternalConfig">putExternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putInternalConfig">putInternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetExternalConfig">resetExternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetInternalConfig">resetInternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalConfig` <a name="putExternalConfig" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putExternalConfig"></a>

```typescript
public putExternalConfig(value: GoogleStorageFtpServerExternalConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putExternalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig">GoogleStorageFtpServerExternalConfig</a>

---

##### `putInternalConfig` <a name="putInternalConfig" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putInternalConfig"></a>

```typescript
public putInternalConfig(value: GoogleStorageFtpServerInternalConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putInternalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig">GoogleStorageFtpServerInternalConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleStorageFtpServerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts">GoogleStorageFtpServerTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExternalConfig` <a name="resetExternalConfig" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetExternalConfig"></a>

```typescript
public resetExternalConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInternalConfig` <a name="resetInternalConfig" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetInternalConfig"></a>

```typescript
public resetInternalConfig(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleStorageFtpServer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isConstruct"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

googleStorageFtpServer.GoogleStorageFtpServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isTerraformElement"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

googleStorageFtpServer.GoogleStorageFtpServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isTerraformResource"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

googleStorageFtpServer.GoogleStorageFtpServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.generateConfigForImport"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

googleStorageFtpServer.GoogleStorageFtpServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleStorageFtpServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleStorageFtpServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleStorageFtpServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleStorageFtpServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.externalConfig">externalConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference">GoogleStorageFtpServerExternalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.internalConfig">internalConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference">GoogleStorageFtpServerInternalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.serviceAgent">serviceAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference">GoogleStorageFtpServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.accessTypeInput">accessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.externalConfigInput">externalConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig">GoogleStorageFtpServerExternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.internalConfigInput">internalConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig">GoogleStorageFtpServerInternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.serverIdInput">serverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts">GoogleStorageFtpServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `externalConfig`<sup>Required</sup> <a name="externalConfig" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.externalConfig"></a>

```typescript
public readonly externalConfig: GoogleStorageFtpServerExternalConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference">GoogleStorageFtpServerExternalConfigOutputReference</a>

---

##### `internalConfig`<sup>Required</sup> <a name="internalConfig" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.internalConfig"></a>

```typescript
public readonly internalConfig: GoogleStorageFtpServerInternalConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference">GoogleStorageFtpServerInternalConfigOutputReference</a>

---

##### `serviceAgent`<sup>Required</sup> <a name="serviceAgent" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.serviceAgent"></a>

```typescript
public readonly serviceAgent: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleStorageFtpServerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference">GoogleStorageFtpServerTimeoutsOutputReference</a>

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.accessTypeInput"></a>

```typescript
public readonly accessTypeInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `externalConfigInput`<sup>Optional</sup> <a name="externalConfigInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.externalConfigInput"></a>

```typescript
public readonly externalConfigInput: GoogleStorageFtpServerExternalConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig">GoogleStorageFtpServerExternalConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `internalConfigInput`<sup>Optional</sup> <a name="internalConfigInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.internalConfigInput"></a>

```typescript
public readonly internalConfigInput: GoogleStorageFtpServerInternalConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig">GoogleStorageFtpServerInternalConfig</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.serverIdInput"></a>

```typescript
public readonly serverIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleStorageFtpServerTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts">GoogleStorageFtpServerTimeouts</a>

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageFtpServerConfig <a name="GoogleStorageFtpServerConfig" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.Initializer"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

const googleStorageFtpServerConfig: googleStorageFtpServer.GoogleStorageFtpServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.accessType">accessType</a></code> | <code>string</code> | The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"]. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.location">location</a></code> | <code>string</code> | The location (region) of the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.serverId">serverId</a></code> | <code>string</code> | A unique ID for the server. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.displayName">displayName</a></code> | <code>string</code> | A display name for the server. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.externalConfig">externalConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig">GoogleStorageFtpServerExternalConfig</a></code> | external_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#id GoogleStorageFtpServer#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.internalConfig">internalConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig">GoogleStorageFtpServerInternalConfig</a></code> | internal_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#project GoogleStorageFtpServer#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts">GoogleStorageFtpServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#access_type GoogleStorageFtpServer#access_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location (region) of the Storage FTP Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#location GoogleStorageFtpServer#location}

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

A unique ID for the server.

Must start with a lowercase letter, and end with a lowercase letter or number. Can contain lowercase letters, numbers, and hyphens. Maximum 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#server_id GoogleStorageFtpServer#server_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#deletion_policy GoogleStorageFtpServer#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A display name for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#display_name GoogleStorageFtpServer#display_name}

---

##### `externalConfig`<sup>Optional</sup> <a name="externalConfig" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.externalConfig"></a>

```typescript
public readonly externalConfig: GoogleStorageFtpServerExternalConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig">GoogleStorageFtpServerExternalConfig</a>

external_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#external_config GoogleStorageFtpServer#external_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#id GoogleStorageFtpServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internalConfig`<sup>Optional</sup> <a name="internalConfig" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.internalConfig"></a>

```typescript
public readonly internalConfig: GoogleStorageFtpServerInternalConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig">GoogleStorageFtpServerInternalConfig</a>

internal_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#internal_config GoogleStorageFtpServer#internal_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to the Storage FTP Server.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#labels GoogleStorageFtpServer#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#project GoogleStorageFtpServer#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleStorageFtpServerTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts">GoogleStorageFtpServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#timeouts GoogleStorageFtpServer#timeouts}

---

### GoogleStorageFtpServerExternalConfig <a name="GoogleStorageFtpServerExternalConfig" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig.Initializer"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

const googleStorageFtpServerExternalConfig: googleStorageFtpServer.GoogleStorageFtpServerExternalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig.property.allowedCidrBlocks">allowedCidrBlocks</a></code> | <code>string[]</code> | A list of allowed IPv4 or IPv6 CIDR block ranges that can connect to this server. |

---

##### `allowedCidrBlocks`<sup>Optional</sup> <a name="allowedCidrBlocks" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig.property.allowedCidrBlocks"></a>

```typescript
public readonly allowedCidrBlocks: string[];
```

- *Type:* string[]

A list of allowed IPv4 or IPv6 CIDR block ranges that can connect to this server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#allowed_cidr_blocks GoogleStorageFtpServer#allowed_cidr_blocks}

---

### GoogleStorageFtpServerInternalConfig <a name="GoogleStorageFtpServerInternalConfig" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig.Initializer"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

const googleStorageFtpServerInternalConfig: googleStorageFtpServer.GoogleStorageFtpServerInternalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig.property.consumerAcceptList">consumerAcceptList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]</code> | consumer_accept_list block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig.property.consumerRejectList">consumerRejectList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>[]</code> | consumer_reject_list block. |

---

##### `consumerAcceptList`<sup>Optional</sup> <a name="consumerAcceptList" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig.property.consumerAcceptList"></a>

```typescript
public readonly consumerAcceptList: IResolvable | GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]

consumer_accept_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#consumer_accept_list GoogleStorageFtpServer#consumer_accept_list}

---

##### `consumerRejectList`<sup>Optional</sup> <a name="consumerRejectList" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig.property.consumerRejectList"></a>

```typescript
public readonly consumerRejectList: IResolvable | GoogleStorageFtpServerInternalConfigConsumerRejectListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>[]

consumer_reject_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#consumer_reject_list GoogleStorageFtpServer#consumer_reject_list}

---

### GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct <a name="GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct.Initializer"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

const googleStorageFtpServerInternalConfigConsumerAcceptListStruct: googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct.property.connectionLimit">connectionLimit</a></code> | <code>number</code> | The maximum number of Private Service Connect endpoints that can be created in the consumer project. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct.property.project">project</a></code> | <code>string</code> | The project that is allowed to connect, in the format 'projects/{project}'. |

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* number

The maximum number of Private Service Connect endpoints that can be created in the consumer project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#connection_limit GoogleStorageFtpServer#connection_limit}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project that is allowed to connect, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#project GoogleStorageFtpServer#project}

---

### GoogleStorageFtpServerInternalConfigConsumerRejectListStruct <a name="GoogleStorageFtpServerInternalConfigConsumerRejectListStruct" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct.Initializer"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

const googleStorageFtpServerInternalConfigConsumerRejectListStruct: googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct.property.project">project</a></code> | <code>string</code> | The project that is rejected from connecting, in the format 'projects/{project}'. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project that is rejected from connecting, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#project GoogleStorageFtpServer#project}

---

### GoogleStorageFtpServerTimeouts <a name="GoogleStorageFtpServerTimeouts" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts.Initializer"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

const googleStorageFtpServerTimeouts: googleStorageFtpServer.GoogleStorageFtpServerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#create GoogleStorageFtpServer#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#delete GoogleStorageFtpServer#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#update GoogleStorageFtpServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#create GoogleStorageFtpServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#delete GoogleStorageFtpServer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#update GoogleStorageFtpServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageFtpServerExternalConfigOutputReference <a name="GoogleStorageFtpServerExternalConfigOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.Initializer"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

new googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.resetAllowedCidrBlocks">resetAllowedCidrBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedCidrBlocks` <a name="resetAllowedCidrBlocks" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.resetAllowedCidrBlocks"></a>

```typescript
public resetAllowedCidrBlocks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocksInput">allowedCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocks">allowedCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig">GoogleStorageFtpServerExternalConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `allowedCidrBlocksInput`<sup>Optional</sup> <a name="allowedCidrBlocksInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocksInput"></a>

```typescript
public readonly allowedCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `allowedCidrBlocks`<sup>Required</sup> <a name="allowedCidrBlocks" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocks"></a>

```typescript
public readonly allowedCidrBlocks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageFtpServerExternalConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig">GoogleStorageFtpServerExternalConfig</a>

---


### GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList <a name="GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

new googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.get"></a>

```typescript
public get(index: number): GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]

---


### GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference <a name="GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

new googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimitInput">connectionLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimit">connectionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionLimitInput`<sup>Optional</sup> <a name="connectionLimitInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimitInput"></a>

```typescript
public readonly connectionLimitInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>

---


### GoogleStorageFtpServerInternalConfigConsumerRejectListStructList <a name="GoogleStorageFtpServerInternalConfigConsumerRejectListStructList" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.Initializer"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

new googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.get"></a>

```typescript
public get(index: number): GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageFtpServerInternalConfigConsumerRejectListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>[]

---


### GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference <a name="GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

new googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageFtpServerInternalConfigConsumerRejectListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>

---


### GoogleStorageFtpServerInternalConfigOutputReference <a name="GoogleStorageFtpServerInternalConfigOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.Initializer"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

new googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.putConsumerAcceptList">putConsumerAcceptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.putConsumerRejectList">putConsumerRejectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.resetConsumerAcceptList">resetConsumerAcceptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.resetConsumerRejectList">resetConsumerRejectList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConsumerAcceptList` <a name="putConsumerAcceptList" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.putConsumerAcceptList"></a>

```typescript
public putConsumerAcceptList(value: IResolvable | GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.putConsumerAcceptList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]

---

##### `putConsumerRejectList` <a name="putConsumerRejectList" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.putConsumerRejectList"></a>

```typescript
public putConsumerRejectList(value: IResolvable | GoogleStorageFtpServerInternalConfigConsumerRejectListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.putConsumerRejectList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>[]

---

##### `resetConsumerAcceptList` <a name="resetConsumerAcceptList" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.resetConsumerAcceptList"></a>

```typescript
public resetConsumerAcceptList(): void
```

##### `resetConsumerRejectList` <a name="resetConsumerRejectList" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.resetConsumerRejectList"></a>

```typescript
public resetConsumerRejectList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.consumerAcceptList">consumerAcceptList</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList">GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.consumerRejectList">consumerRejectList</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList">GoogleStorageFtpServerInternalConfigConsumerRejectListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.consumerAcceptListInput">consumerAcceptListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.consumerRejectListInput">consumerRejectListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig">GoogleStorageFtpServerInternalConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerAcceptList`<sup>Required</sup> <a name="consumerAcceptList" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.consumerAcceptList"></a>

```typescript
public readonly consumerAcceptList: GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList">GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList</a>

---

##### `consumerRejectList`<sup>Required</sup> <a name="consumerRejectList" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.consumerRejectList"></a>

```typescript
public readonly consumerRejectList: GoogleStorageFtpServerInternalConfigConsumerRejectListStructList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList">GoogleStorageFtpServerInternalConfigConsumerRejectListStructList</a>

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

---

##### `consumerAcceptListInput`<sup>Optional</sup> <a name="consumerAcceptListInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.consumerAcceptListInput"></a>

```typescript
public readonly consumerAcceptListInput: IResolvable | GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]

---

##### `consumerRejectListInput`<sup>Optional</sup> <a name="consumerRejectListInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.consumerRejectListInput"></a>

```typescript
public readonly consumerRejectListInput: IResolvable | GoogleStorageFtpServerInternalConfigConsumerRejectListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageFtpServerInternalConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig">GoogleStorageFtpServerInternalConfig</a>

---


### GoogleStorageFtpServerTimeoutsOutputReference <a name="GoogleStorageFtpServerTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleStorageFtpServer } from '@cdktn/provider-google-beta'

new googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts">GoogleStorageFtpServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageFtpServerTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts">GoogleStorageFtpServerTimeouts</a>

---



