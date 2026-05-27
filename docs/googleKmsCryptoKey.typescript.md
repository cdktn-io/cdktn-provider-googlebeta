# `googleKmsCryptoKey` Submodule <a name="`googleKmsCryptoKey` Submodule" id="@cdktn/provider-google-beta.googleKmsCryptoKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsCryptoKey <a name="GoogleKmsCryptoKey" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key google_kms_crypto_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer"></a>

```typescript
import { googleKmsCryptoKey } from '@cdktn/provider-google-beta'

new googleKmsCryptoKey.GoogleKmsCryptoKey(scope: Construct, id: string, config: GoogleKmsCryptoKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig">GoogleKmsCryptoKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig">GoogleKmsCryptoKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putKeyAccessJustificationsPolicy">putKeyAccessJustificationsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putVersionTemplate">putVersionTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetCryptoKeyBackend">resetCryptoKeyBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetDestroyScheduledDuration">resetDestroyScheduledDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetImportOnly">resetImportOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetKeyAccessJustificationsPolicy">resetKeyAccessJustificationsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetSkipInitialVersionCreation">resetSkipInitialVersionCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetVersionTemplate">resetVersionTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKeyAccessJustificationsPolicy` <a name="putKeyAccessJustificationsPolicy" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putKeyAccessJustificationsPolicy"></a>

```typescript
public putKeyAccessJustificationsPolicy(value: GoogleKmsCryptoKeyKeyAccessJustificationsPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putKeyAccessJustificationsPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleKmsCryptoKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a>

---

##### `putVersionTemplate` <a name="putVersionTemplate" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putVersionTemplate"></a>

```typescript
public putVersionTemplate(value: GoogleKmsCryptoKeyVersionTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putVersionTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

---

##### `resetCryptoKeyBackend` <a name="resetCryptoKeyBackend" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetCryptoKeyBackend"></a>

```typescript
public resetCryptoKeyBackend(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDestroyScheduledDuration` <a name="resetDestroyScheduledDuration" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetDestroyScheduledDuration"></a>

```typescript
public resetDestroyScheduledDuration(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImportOnly` <a name="resetImportOnly" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetImportOnly"></a>

```typescript
public resetImportOnly(): void
```

##### `resetKeyAccessJustificationsPolicy` <a name="resetKeyAccessJustificationsPolicy" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetKeyAccessJustificationsPolicy"></a>

```typescript
public resetKeyAccessJustificationsPolicy(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetPurpose` <a name="resetPurpose" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetPurpose"></a>

```typescript
public resetPurpose(): void
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetRotationPeriod"></a>

```typescript
public resetRotationPeriod(): void
```

##### `resetSkipInitialVersionCreation` <a name="resetSkipInitialVersionCreation" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetSkipInitialVersionCreation"></a>

```typescript
public resetSkipInitialVersionCreation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersionTemplate` <a name="resetVersionTemplate" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetVersionTemplate"></a>

```typescript
public resetVersionTemplate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleKmsCryptoKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isConstruct"></a>

```typescript
import { googleKmsCryptoKey } from '@cdktn/provider-google-beta'

googleKmsCryptoKey.GoogleKmsCryptoKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformElement"></a>

```typescript
import { googleKmsCryptoKey } from '@cdktn/provider-google-beta'

googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformResource"></a>

```typescript
import { googleKmsCryptoKey } from '@cdktn/provider-google-beta'

googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport"></a>

```typescript
import { googleKmsCryptoKey } from '@cdktn/provider-google-beta'

googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleKmsCryptoKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleKmsCryptoKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleKmsCryptoKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleKmsCryptoKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyAccessJustificationsPolicy">keyAccessJustificationsPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference">GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList">GoogleKmsCryptoKeyPrimaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference">GoogleKmsCryptoKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.versionTemplate">versionTemplate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference">GoogleKmsCryptoKeyVersionTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cryptoKeyBackendInput">cryptoKeyBackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.destroyScheduledDurationInput">destroyScheduledDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.importOnlyInput">importOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyAccessJustificationsPolicyInput">keyAccessJustificationsPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyRingInput">keyRingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.purposeInput">purposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.skipInitialVersionCreationInput">skipInitialVersionCreationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.versionTemplateInput">versionTemplateInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cryptoKeyBackend">cryptoKeyBackend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.destroyScheduledDuration">destroyScheduledDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.importOnly">importOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyRing">keyRing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.purpose">purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.rotationPeriod">rotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.skipInitialVersionCreation">skipInitialVersionCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `keyAccessJustificationsPolicy`<sup>Required</sup> <a name="keyAccessJustificationsPolicy" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyAccessJustificationsPolicy"></a>

```typescript
public readonly keyAccessJustificationsPolicy: GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference">GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference</a>

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.primary"></a>

```typescript
public readonly primary: GoogleKmsCryptoKeyPrimaryList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList">GoogleKmsCryptoKeyPrimaryList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleKmsCryptoKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference">GoogleKmsCryptoKeyTimeoutsOutputReference</a>

---

##### `versionTemplate`<sup>Required</sup> <a name="versionTemplate" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.versionTemplate"></a>

```typescript
public readonly versionTemplate: GoogleKmsCryptoKeyVersionTemplateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference">GoogleKmsCryptoKeyVersionTemplateOutputReference</a>

---

##### `cryptoKeyBackendInput`<sup>Optional</sup> <a name="cryptoKeyBackendInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cryptoKeyBackendInput"></a>

```typescript
public readonly cryptoKeyBackendInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `destroyScheduledDurationInput`<sup>Optional</sup> <a name="destroyScheduledDurationInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.destroyScheduledDurationInput"></a>

```typescript
public readonly destroyScheduledDurationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importOnlyInput`<sup>Optional</sup> <a name="importOnlyInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.importOnlyInput"></a>

```typescript
public readonly importOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyAccessJustificationsPolicyInput`<sup>Optional</sup> <a name="keyAccessJustificationsPolicyInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyAccessJustificationsPolicyInput"></a>

```typescript
public readonly keyAccessJustificationsPolicyInput: GoogleKmsCryptoKeyKeyAccessJustificationsPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a>

---

##### `keyRingInput`<sup>Optional</sup> <a name="keyRingInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyRingInput"></a>

```typescript
public readonly keyRingInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.purposeInput"></a>

```typescript
public readonly purposeInput: string;
```

- *Type:* string

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.rotationPeriodInput"></a>

```typescript
public readonly rotationPeriodInput: string;
```

- *Type:* string

---

##### `skipInitialVersionCreationInput`<sup>Optional</sup> <a name="skipInitialVersionCreationInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.skipInitialVersionCreationInput"></a>

```typescript
public readonly skipInitialVersionCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleKmsCryptoKeyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a>

---

##### `versionTemplateInput`<sup>Optional</sup> <a name="versionTemplateInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.versionTemplateInput"></a>

```typescript
public readonly versionTemplateInput: GoogleKmsCryptoKeyVersionTemplate;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

---

##### `cryptoKeyBackend`<sup>Required</sup> <a name="cryptoKeyBackend" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cryptoKeyBackend"></a>

```typescript
public readonly cryptoKeyBackend: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `destroyScheduledDuration`<sup>Required</sup> <a name="destroyScheduledDuration" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.destroyScheduledDuration"></a>

```typescript
public readonly destroyScheduledDuration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importOnly`<sup>Required</sup> <a name="importOnly" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.importOnly"></a>

```typescript
public readonly importOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyRing"></a>

```typescript
public readonly keyRing: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: string;
```

- *Type:* string

---

##### `skipInitialVersionCreation`<sup>Required</sup> <a name="skipInitialVersionCreation" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.skipInitialVersionCreation"></a>

```typescript
public readonly skipInitialVersionCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsCryptoKeyConfig <a name="GoogleKmsCryptoKeyConfig" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.Initializer"></a>

```typescript
import { googleKmsCryptoKey } from '@cdktn/provider-google-beta'

const googleKmsCryptoKeyConfig: googleKmsCryptoKey.GoogleKmsCryptoKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.keyRing">keyRing</a></code> | <code>string</code> | The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.name">name</a></code> | <code>string</code> | The resource name for the CryptoKey. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.cryptoKeyBackend">cryptoKeyBackend</a></code> | <code>string</code> | The resource name of the backend environment associated with all CryptoKeyVersions within this CryptoKey. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.destroyScheduledDuration">destroyScheduledDuration</a></code> | <code>string</code> | The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#id GoogleKmsCryptoKey#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.importOnly">importOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this key may contain imported versions only. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.keyAccessJustificationsPolicy">keyAccessJustificationsPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a></code> | key_access_justifications_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels with user-defined metadata to apply to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.purpose">purpose</a></code> | <code>string</code> | The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT". |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>string</code> | Every time this period passes, generate a new CryptoKeyVersion and set it as the primary. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.skipInitialVersionCreation">skipInitialVersionCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the request will create a CryptoKey without any CryptoKeyVersions. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.versionTemplate">versionTemplate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a></code> | version_template block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.keyRing"></a>

```typescript
public readonly keyRing: string;
```

- *Type:* string

The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#key_ring GoogleKmsCryptoKey#key_ring}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name for the CryptoKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#name GoogleKmsCryptoKey#name}

---

##### `cryptoKeyBackend`<sup>Optional</sup> <a name="cryptoKeyBackend" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.cryptoKeyBackend"></a>

```typescript
public readonly cryptoKeyBackend: string;
```

- *Type:* string

The resource name of the backend environment associated with all CryptoKeyVersions within this CryptoKey.

The resource name is in the format "projects/* /locations/* /ekmConnections/*" and only applies to "EXTERNAL_VPC" keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#crypto_key_backend GoogleKmsCryptoKey#crypto_key_backend}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#deletion_policy GoogleKmsCryptoKey#deletion_policy}

---

##### `destroyScheduledDuration`<sup>Optional</sup> <a name="destroyScheduledDuration" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.destroyScheduledDuration"></a>

```typescript
public readonly destroyScheduledDuration: string;
```

- *Type:* string

The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.

If not specified at creation time, the default duration is 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#destroy_scheduled_duration GoogleKmsCryptoKey#destroy_scheduled_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#id GoogleKmsCryptoKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importOnly`<sup>Optional</sup> <a name="importOnly" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.importOnly"></a>

```typescript
public readonly importOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this key may contain imported versions only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#import_only GoogleKmsCryptoKey#import_only}

---

##### `keyAccessJustificationsPolicy`<sup>Optional</sup> <a name="keyAccessJustificationsPolicy" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.keyAccessJustificationsPolicy"></a>

```typescript
public readonly keyAccessJustificationsPolicy: GoogleKmsCryptoKeyKeyAccessJustificationsPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a>

key_access_justifications_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#key_access_justifications_policy GoogleKmsCryptoKey#key_access_justifications_policy}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels with user-defined metadata to apply to this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#labels GoogleKmsCryptoKey#labels}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#purpose GoogleKmsCryptoKey#purpose}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: string;
```

- *Type:* string

Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.

The first rotation will take place after the specified period. The rotation period has
the format of a decimal number with up to 9 fractional digits, followed by the
letter 's' (seconds). It must be greater than a day (ie, 86400).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#rotation_period GoogleKmsCryptoKey#rotation_period}

---

##### `skipInitialVersionCreation`<sup>Optional</sup> <a name="skipInitialVersionCreation" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.skipInitialVersionCreation"></a>

```typescript
public readonly skipInitialVersionCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the request will create a CryptoKey without any CryptoKeyVersions.

You must use the 'google_kms_crypto_key_version' resource to create a new CryptoKeyVersion
or 'google_kms_key_ring_import_job' resource to import the CryptoKeyVersion.
This field is only applicable during initial CryptoKey creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#skip_initial_version_creation GoogleKmsCryptoKey#skip_initial_version_creation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleKmsCryptoKeyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#timeouts GoogleKmsCryptoKey#timeouts}

---

##### `versionTemplate`<sup>Optional</sup> <a name="versionTemplate" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.versionTemplate"></a>

```typescript
public readonly versionTemplate: GoogleKmsCryptoKeyVersionTemplate;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

version_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#version_template GoogleKmsCryptoKey#version_template}

---

### GoogleKmsCryptoKeyKeyAccessJustificationsPolicy <a name="GoogleKmsCryptoKeyKeyAccessJustificationsPolicy" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy.Initializer"></a>

```typescript
import { googleKmsCryptoKey } from '@cdktn/provider-google-beta'

const googleKmsCryptoKeyKeyAccessJustificationsPolicy: googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy.property.allowedAccessReasons">allowedAccessReasons</a></code> | <code>string[]</code> | The list of allowed reasons for access to this CryptoKey. |

---

##### `allowedAccessReasons`<sup>Optional</sup> <a name="allowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy.property.allowedAccessReasons"></a>

```typescript
public readonly allowedAccessReasons: string[];
```

- *Type:* string[]

The list of allowed reasons for access to this CryptoKey.

Zero allowed
access reasons means all encrypt, decrypt, and sign operations for
this CryptoKey will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#allowed_access_reasons GoogleKmsCryptoKey#allowed_access_reasons}

---

### GoogleKmsCryptoKeyPrimary <a name="GoogleKmsCryptoKeyPrimary" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimary.Initializer"></a>

```typescript
import { googleKmsCryptoKey } from '@cdktn/provider-google-beta'

const googleKmsCryptoKeyPrimary: googleKmsCryptoKey.GoogleKmsCryptoKeyPrimary = { ... }
```


### GoogleKmsCryptoKeyTimeouts <a name="GoogleKmsCryptoKeyTimeouts" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.Initializer"></a>

```typescript
import { googleKmsCryptoKey } from '@cdktn/provider-google-beta'

const googleKmsCryptoKeyTimeouts: googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#create GoogleKmsCryptoKey#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#delete GoogleKmsCryptoKey#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#update GoogleKmsCryptoKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#create GoogleKmsCryptoKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#delete GoogleKmsCryptoKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#update GoogleKmsCryptoKey#update}.

---

### GoogleKmsCryptoKeyVersionTemplate <a name="GoogleKmsCryptoKeyVersionTemplate" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.Initializer"></a>

```typescript
import { googleKmsCryptoKey } from '@cdktn/provider-google-beta'

const googleKmsCryptoKeyVersionTemplate: googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.property.algorithm">algorithm</a></code> | <code>string</code> | The algorithm to use when creating a version based on this template. See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.property.protectionLevel">protectionLevel</a></code> | <code>string</code> | The protection level to use when creating a version based on this template. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

The algorithm to use when creating a version based on this template. See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#algorithm GoogleKmsCryptoKey#algorithm}

---

##### `protectionLevel`<sup>Optional</sup> <a name="protectionLevel" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.property.protectionLevel"></a>

```typescript
public readonly protectionLevel: string;
```

- *Type:* string

The protection level to use when creating a version based on this template.

Possible values include "SOFTWARE", "HSM", "EXTERNAL", "EXTERNAL_VPC". Defaults to "SOFTWARE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_kms_crypto_key#protection_level GoogleKmsCryptoKey#protection_level}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference <a name="GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer"></a>

```typescript
import { googleKmsCryptoKey } from '@cdktn/provider-google-beta'

new googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resetAllowedAccessReasons">resetAllowedAccessReasons</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAccessReasons` <a name="resetAllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resetAllowedAccessReasons"></a>

```typescript
public resetAllowedAccessReasons(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasonsInput">allowedAccessReasonsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasons">allowedAccessReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAccessReasonsInput`<sup>Optional</sup> <a name="allowedAccessReasonsInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasonsInput"></a>

```typescript
public readonly allowedAccessReasonsInput: string[];
```

- *Type:* string[]

---

##### `allowedAccessReasons`<sup>Required</sup> <a name="allowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasons"></a>

```typescript
public readonly allowedAccessReasons: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleKmsCryptoKeyKeyAccessJustificationsPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a>

---


### GoogleKmsCryptoKeyPrimaryList <a name="GoogleKmsCryptoKeyPrimaryList" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer"></a>

```typescript
import { googleKmsCryptoKey } from '@cdktn/provider-google-beta'

new googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.get"></a>

```typescript
public get(index: number): GoogleKmsCryptoKeyPrimaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleKmsCryptoKeyPrimaryOutputReference <a name="GoogleKmsCryptoKeyPrimaryOutputReference" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer"></a>

```typescript
import { googleKmsCryptoKey } from '@cdktn/provider-google-beta'

new googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimary">GoogleKmsCryptoKeyPrimary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleKmsCryptoKeyPrimary;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimary">GoogleKmsCryptoKeyPrimary</a>

---


### GoogleKmsCryptoKeyTimeoutsOutputReference <a name="GoogleKmsCryptoKeyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleKmsCryptoKey } from '@cdktn/provider-google-beta'

new googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleKmsCryptoKeyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a>

---


### GoogleKmsCryptoKeyVersionTemplateOutputReference <a name="GoogleKmsCryptoKeyVersionTemplateOutputReference" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer"></a>

```typescript
import { googleKmsCryptoKey } from '@cdktn/provider-google-beta'

new googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resetProtectionLevel">resetProtectionLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProtectionLevel` <a name="resetProtectionLevel" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resetProtectionLevel"></a>

```typescript
public resetProtectionLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevelInput">protectionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel">protectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `protectionLevelInput`<sup>Optional</sup> <a name="protectionLevelInput" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevelInput"></a>

```typescript
public readonly protectionLevelInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel"></a>

```typescript
public readonly protectionLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleKmsCryptoKeyVersionTemplate;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

---



