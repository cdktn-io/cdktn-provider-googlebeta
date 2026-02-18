# `googleLoggingFolderBucketConfig` Submodule <a name="`googleLoggingFolderBucketConfig` Submodule" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingFolderBucketConfig <a name="GoogleLoggingFolderBucketConfig" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_logging_folder_bucket_config google_logging_folder_bucket_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.Initializer"></a>

```typescript
import { googleLoggingFolderBucketConfig } from '@cdktn/provider-google-beta'

new googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig(scope: Construct, id: string, config: GoogleLoggingFolderBucketConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig">GoogleLoggingFolderBucketConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig">GoogleLoggingFolderBucketConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.putCmekSettings">putCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.putIndexConfigs">putIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetCmekSettings">resetCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetIndexConfigs">resetIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCmekSettings` <a name="putCmekSettings" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.putCmekSettings"></a>

```typescript
public putCmekSettings(value: GoogleLoggingFolderBucketConfigCmekSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.putCmekSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings">GoogleLoggingFolderBucketConfigCmekSettings</a>

---

##### `putIndexConfigs` <a name="putIndexConfigs" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.putIndexConfigs"></a>

```typescript
public putIndexConfigs(value: IResolvable | GoogleLoggingFolderBucketConfigIndexConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.putIndexConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs">GoogleLoggingFolderBucketConfigIndexConfigs</a>[]

---

##### `resetCmekSettings` <a name="resetCmekSettings" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetCmekSettings"></a>

```typescript
public resetCmekSettings(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndexConfigs` <a name="resetIndexConfigs" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetIndexConfigs"></a>

```typescript
public resetIndexConfigs(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleLoggingFolderBucketConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isConstruct"></a>

```typescript
import { googleLoggingFolderBucketConfig } from '@cdktn/provider-google-beta'

googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isTerraformElement"></a>

```typescript
import { googleLoggingFolderBucketConfig } from '@cdktn/provider-google-beta'

googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isTerraformResource"></a>

```typescript
import { googleLoggingFolderBucketConfig } from '@cdktn/provider-google-beta'

googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.generateConfigForImport"></a>

```typescript
import { googleLoggingFolderBucketConfig } from '@cdktn/provider-google-beta'

googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleLoggingFolderBucketConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleLoggingFolderBucketConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleLoggingFolderBucketConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_logging_folder_bucket_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleLoggingFolderBucketConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference">GoogleLoggingFolderBucketConfigCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.indexConfigs">indexConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList">GoogleLoggingFolderBucketConfigIndexConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.bucketIdInput">bucketIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.cmekSettingsInput">cmekSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings">GoogleLoggingFolderBucketConfigCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.indexConfigsInput">indexConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs">GoogleLoggingFolderBucketConfigIndexConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.bucketId">bucketId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cmekSettings`<sup>Required</sup> <a name="cmekSettings" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.cmekSettings"></a>

```typescript
public readonly cmekSettings: GoogleLoggingFolderBucketConfigCmekSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference">GoogleLoggingFolderBucketConfigCmekSettingsOutputReference</a>

---

##### `indexConfigs`<sup>Required</sup> <a name="indexConfigs" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.indexConfigs"></a>

```typescript
public readonly indexConfigs: GoogleLoggingFolderBucketConfigIndexConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList">GoogleLoggingFolderBucketConfigIndexConfigsList</a>

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `bucketIdInput`<sup>Optional</sup> <a name="bucketIdInput" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.bucketIdInput"></a>

```typescript
public readonly bucketIdInput: string;
```

- *Type:* string

---

##### `cmekSettingsInput`<sup>Optional</sup> <a name="cmekSettingsInput" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.cmekSettingsInput"></a>

```typescript
public readonly cmekSettingsInput: GoogleLoggingFolderBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings">GoogleLoggingFolderBucketConfigCmekSettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexConfigsInput`<sup>Optional</sup> <a name="indexConfigsInput" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.indexConfigsInput"></a>

```typescript
public readonly indexConfigsInput: IResolvable | GoogleLoggingFolderBucketConfigIndexConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs">GoogleLoggingFolderBucketConfigIndexConfigs</a>[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.bucketId"></a>

```typescript
public readonly bucketId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingFolderBucketConfigCmekSettings <a name="GoogleLoggingFolderBucketConfigCmekSettings" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings.Initializer"></a>

```typescript
import { googleLoggingFolderBucketConfig } from '@cdktn/provider-google-beta'

const googleLoggingFolderBucketConfigCmekSettings: googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The resource name for the configured Cloud KMS key. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_logging_folder_bucket_config#kms_key_name GoogleLoggingFolderBucketConfig#kms_key_name}

---

### GoogleLoggingFolderBucketConfigConfig <a name="GoogleLoggingFolderBucketConfigConfig" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.Initializer"></a>

```typescript
import { googleLoggingFolderBucketConfig } from '@cdktn/provider-google-beta'

const googleLoggingFolderBucketConfigConfig: googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.bucketId">bucketId</a></code> | <code>string</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.folder">folder</a></code> | <code>string</code> | The parent resource that contains the logging bucket. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.location">location</a></code> | <code>string</code> | The location of the bucket. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings">GoogleLoggingFolderBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.description">description</a></code> | <code>string</code> | An optional description for this bucket. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_logging_folder_bucket_config#id GoogleLoggingFolderBucketConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.indexConfigs">indexConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs">GoogleLoggingFolderBucketConfigIndexConfigs</a>[]</code> | index_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.bucketId"></a>

```typescript
public readonly bucketId: string;
```

- *Type:* string

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_logging_folder_bucket_config#bucket_id GoogleLoggingFolderBucketConfig#bucket_id}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The parent resource that contains the logging bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_logging_folder_bucket_config#folder GoogleLoggingFolderBucketConfig#folder}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_logging_folder_bucket_config#location GoogleLoggingFolderBucketConfig#location}

---

##### `cmekSettings`<sup>Optional</sup> <a name="cmekSettings" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.cmekSettings"></a>

```typescript
public readonly cmekSettings: GoogleLoggingFolderBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings">GoogleLoggingFolderBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_logging_folder_bucket_config#cmek_settings GoogleLoggingFolderBucketConfig#cmek_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_logging_folder_bucket_config#description GoogleLoggingFolderBucketConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_logging_folder_bucket_config#id GoogleLoggingFolderBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexConfigs`<sup>Optional</sup> <a name="indexConfigs" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.indexConfigs"></a>

```typescript
public readonly indexConfigs: IResolvable | GoogleLoggingFolderBucketConfigIndexConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs">GoogleLoggingFolderBucketConfigIndexConfigs</a>[]

index_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_logging_folder_bucket_config#index_configs GoogleLoggingFolderBucketConfig#index_configs}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_logging_folder_bucket_config#retention_days GoogleLoggingFolderBucketConfig#retention_days}

---

### GoogleLoggingFolderBucketConfigIndexConfigs <a name="GoogleLoggingFolderBucketConfigIndexConfigs" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs.Initializer"></a>

```typescript
import { googleLoggingFolderBucketConfig } from '@cdktn/provider-google-beta'

const googleLoggingFolderBucketConfigIndexConfigs: googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs.property.fieldPath">fieldPath</a></code> | <code>string</code> | The LogEntry field path to index. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs.property.type">type</a></code> | <code>string</code> | The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing. |

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

The LogEntry field path to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_logging_folder_bucket_config#field_path GoogleLoggingFolderBucketConfig#field_path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing.

See [indexing documentation]( https://cloud.google.com/logging/docs/view/advanced-queries#indexed-fields) for details.
For example: jsonPayload.request.status

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_logging_folder_bucket_config#type GoogleLoggingFolderBucketConfig#type}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingFolderBucketConfigCmekSettingsOutputReference <a name="GoogleLoggingFolderBucketConfigCmekSettingsOutputReference" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.Initializer"></a>

```typescript
import { googleLoggingFolderBucketConfig } from '@cdktn/provider-google-beta'

new googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName">kmsKeyVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings">GoogleLoggingFolderBucketConfigCmekSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyVersionName`<sup>Required</sup> <a name="kmsKeyVersionName" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName"></a>

```typescript
public readonly kmsKeyVersionName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLoggingFolderBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings">GoogleLoggingFolderBucketConfigCmekSettings</a>

---


### GoogleLoggingFolderBucketConfigIndexConfigsList <a name="GoogleLoggingFolderBucketConfigIndexConfigsList" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.Initializer"></a>

```typescript
import { googleLoggingFolderBucketConfig } from '@cdktn/provider-google-beta'

new googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.get"></a>

```typescript
public get(index: number): GoogleLoggingFolderBucketConfigIndexConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs">GoogleLoggingFolderBucketConfigIndexConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLoggingFolderBucketConfigIndexConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs">GoogleLoggingFolderBucketConfigIndexConfigs</a>[]

---


### GoogleLoggingFolderBucketConfigIndexConfigsOutputReference <a name="GoogleLoggingFolderBucketConfigIndexConfigsOutputReference" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer"></a>

```typescript
import { googleLoggingFolderBucketConfig } from '@cdktn/provider-google-beta'

new googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs">GoogleLoggingFolderBucketConfigIndexConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLoggingFolderBucketConfigIndexConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs">GoogleLoggingFolderBucketConfigIndexConfigs</a>

---



