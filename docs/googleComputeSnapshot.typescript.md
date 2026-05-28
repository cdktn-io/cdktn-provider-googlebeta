# `googleComputeSnapshot` Submodule <a name="`googleComputeSnapshot` Submodule" id="@cdktn/provider-google-beta.googleComputeSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeSnapshot <a name="GoogleComputeSnapshot" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot google_compute_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.Initializer"></a>

```typescript
import { googleComputeSnapshot } from '@cdktn/provider-google-beta'

new googleComputeSnapshot.GoogleComputeSnapshot(scope: Construct, id: string, config: GoogleComputeSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig">GoogleComputeSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig">GoogleComputeSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.putSnapshotEncryptionKey">putSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.putSourceDiskEncryptionKey">putSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetChainName">resetChainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetGuestFlush">resetGuestFlush</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetSnapshotEncryptionKey">resetSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetSnapshotType">resetSnapshotType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetSourceDisk">resetSourceDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetSourceDiskEncryptionKey">resetSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetSourceInstantSnapshot">resetSourceInstantSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetStorageLocations">resetStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSnapshotEncryptionKey` <a name="putSnapshotEncryptionKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.putSnapshotEncryptionKey"></a>

```typescript
public putSnapshotEncryptionKey(value: GoogleComputeSnapshotSnapshotEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.putSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey">GoogleComputeSnapshotSnapshotEncryptionKey</a>

---

##### `putSourceDiskEncryptionKey` <a name="putSourceDiskEncryptionKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.putSourceDiskEncryptionKey"></a>

```typescript
public putSourceDiskEncryptionKey(value: GoogleComputeSnapshotSourceDiskEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.putSourceDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey">GoogleComputeSnapshotSourceDiskEncryptionKey</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeSnapshotTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeouts">GoogleComputeSnapshotTimeouts</a>

---

##### `resetChainName` <a name="resetChainName" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetChainName"></a>

```typescript
public resetChainName(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGuestFlush` <a name="resetGuestFlush" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetGuestFlush"></a>

```typescript
public resetGuestFlush(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSnapshotEncryptionKey` <a name="resetSnapshotEncryptionKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetSnapshotEncryptionKey"></a>

```typescript
public resetSnapshotEncryptionKey(): void
```

##### `resetSnapshotType` <a name="resetSnapshotType" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetSnapshotType"></a>

```typescript
public resetSnapshotType(): void
```

##### `resetSourceDisk` <a name="resetSourceDisk" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetSourceDisk"></a>

```typescript
public resetSourceDisk(): void
```

##### `resetSourceDiskEncryptionKey` <a name="resetSourceDiskEncryptionKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetSourceDiskEncryptionKey"></a>

```typescript
public resetSourceDiskEncryptionKey(): void
```

##### `resetSourceInstantSnapshot` <a name="resetSourceInstantSnapshot" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetSourceInstantSnapshot"></a>

```typescript
public resetSourceInstantSnapshot(): void
```

##### `resetStorageLocations` <a name="resetStorageLocations" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetStorageLocations"></a>

```typescript
public resetStorageLocations(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.isConstruct"></a>

```typescript
import { googleComputeSnapshot } from '@cdktn/provider-google-beta'

googleComputeSnapshot.GoogleComputeSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.isTerraformElement"></a>

```typescript
import { googleComputeSnapshot } from '@cdktn/provider-google-beta'

googleComputeSnapshot.GoogleComputeSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.isTerraformResource"></a>

```typescript
import { googleComputeSnapshot } from '@cdktn/provider-google-beta'

googleComputeSnapshot.GoogleComputeSnapshot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.generateConfigForImport"></a>

```typescript
import { googleComputeSnapshot } from '@cdktn/provider-google-beta'

googleComputeSnapshot.GoogleComputeSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleComputeSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.licenses">licenses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.snapshotEncryptionKey">snapshotEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference">GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.snapshotId">snapshotId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.sourceDiskEncryptionKey">sourceDiskEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference">GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.storageBytes">storageBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference">GoogleComputeSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.chainNameInput">chainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.guestFlushInput">guestFlushInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.snapshotEncryptionKeyInput">snapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey">GoogleComputeSnapshotSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.snapshotTypeInput">snapshotTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.sourceDiskEncryptionKeyInput">sourceDiskEncryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey">GoogleComputeSnapshotSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.sourceDiskInput">sourceDiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.sourceInstantSnapshotInput">sourceInstantSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.storageLocationsInput">storageLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeouts">GoogleComputeSnapshotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.chainName">chainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.guestFlush">guestFlush</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.snapshotType">snapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.sourceDisk">sourceDisk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.sourceInstantSnapshot">sourceInstantSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.storageLocations">storageLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `licenses`<sup>Required</sup> <a name="licenses" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.licenses"></a>

```typescript
public readonly licenses: string[];
```

- *Type:* string[]

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `snapshotEncryptionKey`<sup>Required</sup> <a name="snapshotEncryptionKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.snapshotEncryptionKey"></a>

```typescript
public readonly snapshotEncryptionKey: GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference">GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference</a>

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.snapshotId"></a>

```typescript
public readonly snapshotId: number;
```

- *Type:* number

---

##### `sourceDiskEncryptionKey`<sup>Required</sup> <a name="sourceDiskEncryptionKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.sourceDiskEncryptionKey"></a>

```typescript
public readonly sourceDiskEncryptionKey: GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference">GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference</a>

---

##### `storageBytes`<sup>Required</sup> <a name="storageBytes" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.storageBytes"></a>

```typescript
public readonly storageBytes: number;
```

- *Type:* number

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeSnapshotTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference">GoogleComputeSnapshotTimeoutsOutputReference</a>

---

##### `chainNameInput`<sup>Optional</sup> <a name="chainNameInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.chainNameInput"></a>

```typescript
public readonly chainNameInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `guestFlushInput`<sup>Optional</sup> <a name="guestFlushInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.guestFlushInput"></a>

```typescript
public readonly guestFlushInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `snapshotEncryptionKeyInput`<sup>Optional</sup> <a name="snapshotEncryptionKeyInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.snapshotEncryptionKeyInput"></a>

```typescript
public readonly snapshotEncryptionKeyInput: GoogleComputeSnapshotSnapshotEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey">GoogleComputeSnapshotSnapshotEncryptionKey</a>

---

##### `snapshotTypeInput`<sup>Optional</sup> <a name="snapshotTypeInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.snapshotTypeInput"></a>

```typescript
public readonly snapshotTypeInput: string;
```

- *Type:* string

---

##### `sourceDiskEncryptionKeyInput`<sup>Optional</sup> <a name="sourceDiskEncryptionKeyInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.sourceDiskEncryptionKeyInput"></a>

```typescript
public readonly sourceDiskEncryptionKeyInput: GoogleComputeSnapshotSourceDiskEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey">GoogleComputeSnapshotSourceDiskEncryptionKey</a>

---

##### `sourceDiskInput`<sup>Optional</sup> <a name="sourceDiskInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.sourceDiskInput"></a>

```typescript
public readonly sourceDiskInput: string;
```

- *Type:* string

---

##### `sourceInstantSnapshotInput`<sup>Optional</sup> <a name="sourceInstantSnapshotInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.sourceInstantSnapshotInput"></a>

```typescript
public readonly sourceInstantSnapshotInput: string;
```

- *Type:* string

---

##### `storageLocationsInput`<sup>Optional</sup> <a name="storageLocationsInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.storageLocationsInput"></a>

```typescript
public readonly storageLocationsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeSnapshotTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeouts">GoogleComputeSnapshotTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `chainName`<sup>Required</sup> <a name="chainName" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.chainName"></a>

```typescript
public readonly chainName: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `guestFlush`<sup>Required</sup> <a name="guestFlush" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.guestFlush"></a>

```typescript
public readonly guestFlush: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `snapshotType`<sup>Required</sup> <a name="snapshotType" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.snapshotType"></a>

```typescript
public readonly snapshotType: string;
```

- *Type:* string

---

##### `sourceDisk`<sup>Required</sup> <a name="sourceDisk" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.sourceDisk"></a>

```typescript
public readonly sourceDisk: string;
```

- *Type:* string

---

##### `sourceInstantSnapshot`<sup>Required</sup> <a name="sourceInstantSnapshot" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.sourceInstantSnapshot"></a>

```typescript
public readonly sourceInstantSnapshot: string;
```

- *Type:* string

---

##### `storageLocations`<sup>Required</sup> <a name="storageLocations" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.storageLocations"></a>

```typescript
public readonly storageLocations: string[];
```

- *Type:* string[]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeSnapshotConfig <a name="GoogleComputeSnapshotConfig" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.Initializer"></a>

```typescript
import { googleComputeSnapshot } from '@cdktn/provider-google-beta'

const googleComputeSnapshotConfig: googleComputeSnapshot.GoogleComputeSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.chainName">chainName</a></code> | <code>string</code> | Creates the new snapshot in the snapshot chain labeled with the specified name. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.guestFlush">guestFlush</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to attempt an application consistent snapshot by informing the OS to prepare for the snapshot process. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#id GoogleComputeSnapshot#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to apply to this Snapshot. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#project GoogleComputeSnapshot#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.snapshotEncryptionKey">snapshotEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey">GoogleComputeSnapshotSnapshotEncryptionKey</a></code> | snapshot_encryption_key block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.snapshotType">snapshotType</a></code> | <code>string</code> | Indicates the type of the snapshot. Possible values: ["ARCHIVE", "STANDARD"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.sourceDisk">sourceDisk</a></code> | <code>string</code> | A reference to the disk used to create this snapshot. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.sourceDiskEncryptionKey">sourceDiskEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey">GoogleComputeSnapshotSourceDiskEncryptionKey</a></code> | source_disk_encryption_key block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.sourceInstantSnapshot">sourceInstantSnapshot</a></code> | <code>string</code> | A reference to the instant snapshot used to create this snapshot. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.storageLocations">storageLocations</a></code> | <code>string[]</code> | Cloud Storage bucket storage location of the snapshot (regional or multi-regional). |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeouts">GoogleComputeSnapshotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.zone">zone</a></code> | <code>string</code> | A reference to the zone where the disk is hosted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#name GoogleComputeSnapshot#name}

---

##### `chainName`<sup>Optional</sup> <a name="chainName" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.chainName"></a>

```typescript
public readonly chainName: string;
```

- *Type:* string

Creates the new snapshot in the snapshot chain labeled with the specified name.

The chain name must be 1-63 characters long and
comply with RFC1035. This is an uncommon option only for advanced
service owners who needs to create separate snapshot chains, for
example, for chargeback tracking.  When you describe your snapshot
resource, this field is visible only if it has a non-empty value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#chain_name GoogleComputeSnapshot#chain_name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#deletion_policy GoogleComputeSnapshot#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#description GoogleComputeSnapshot#description}

---

##### `guestFlush`<sup>Optional</sup> <a name="guestFlush" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.guestFlush"></a>

```typescript
public readonly guestFlush: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to attempt an application consistent snapshot by informing the OS to prepare for the snapshot process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#guest_flush GoogleComputeSnapshot#guest_flush}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#id GoogleComputeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to apply to this Snapshot.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#labels GoogleComputeSnapshot#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#project GoogleComputeSnapshot#project}.

---

##### `snapshotEncryptionKey`<sup>Optional</sup> <a name="snapshotEncryptionKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.snapshotEncryptionKey"></a>

```typescript
public readonly snapshotEncryptionKey: GoogleComputeSnapshotSnapshotEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey">GoogleComputeSnapshotSnapshotEncryptionKey</a>

snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#snapshot_encryption_key GoogleComputeSnapshot#snapshot_encryption_key}

---

##### `snapshotType`<sup>Optional</sup> <a name="snapshotType" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.snapshotType"></a>

```typescript
public readonly snapshotType: string;
```

- *Type:* string

Indicates the type of the snapshot. Possible values: ["ARCHIVE", "STANDARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#snapshot_type GoogleComputeSnapshot#snapshot_type}

---

##### `sourceDisk`<sup>Optional</sup> <a name="sourceDisk" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.sourceDisk"></a>

```typescript
public readonly sourceDisk: string;
```

- *Type:* string

A reference to the disk used to create this snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#source_disk GoogleComputeSnapshot#source_disk}

---

##### `sourceDiskEncryptionKey`<sup>Optional</sup> <a name="sourceDiskEncryptionKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.sourceDiskEncryptionKey"></a>

```typescript
public readonly sourceDiskEncryptionKey: GoogleComputeSnapshotSourceDiskEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey">GoogleComputeSnapshotSourceDiskEncryptionKey</a>

source_disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#source_disk_encryption_key GoogleComputeSnapshot#source_disk_encryption_key}

---

##### `sourceInstantSnapshot`<sup>Optional</sup> <a name="sourceInstantSnapshot" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.sourceInstantSnapshot"></a>

```typescript
public readonly sourceInstantSnapshot: string;
```

- *Type:* string

A reference to the instant snapshot used to create this snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#source_instant_snapshot GoogleComputeSnapshot#source_instant_snapshot}

---

##### `storageLocations`<sup>Optional</sup> <a name="storageLocations" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.storageLocations"></a>

```typescript
public readonly storageLocations: string[];
```

- *Type:* string[]

Cloud Storage bucket storage location of the snapshot (regional or multi-regional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#storage_locations GoogleComputeSnapshot#storage_locations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeSnapshotTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeouts">GoogleComputeSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#timeouts GoogleComputeSnapshot#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

A reference to the zone where the disk is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#zone GoogleComputeSnapshot#zone}

---

### GoogleComputeSnapshotSnapshotEncryptionKey <a name="GoogleComputeSnapshotSnapshotEncryptionKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey.Initializer"></a>

```typescript
import { googleComputeSnapshot } from '@cdktn/provider-google-beta'

const googleComputeSnapshotSnapshotEncryptionKey: googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | The name of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey.property.rawKey">rawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>string</code> | Specifies an encryption key stored in Google Cloud KMS, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `kmsKeySelfLink`<sup>Optional</sup> <a name="kmsKeySelfLink" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

The name of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#kms_key_self_link GoogleComputeSnapshot#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#kms_key_service_account GoogleComputeSnapshot#kms_key_service_account}

---

##### `rawKey`<sup>Optional</sup> <a name="rawKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey.property.rawKey"></a>

```typescript
public readonly rawKey: string;
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#raw_key GoogleComputeSnapshot#raw_key}

---

##### `rsaEncryptedKey`<sup>Optional</sup> <a name="rsaEncryptedKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey.property.rsaEncryptedKey"></a>

```typescript
public readonly rsaEncryptedKey: string;
```

- *Type:* string

Specifies an encryption key stored in Google Cloud KMS, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#rsa_encrypted_key GoogleComputeSnapshot#rsa_encrypted_key}

---

### GoogleComputeSnapshotSourceDiskEncryptionKey <a name="GoogleComputeSnapshotSourceDiskEncryptionKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey.Initializer"></a>

```typescript
import { googleComputeSnapshot } from '@cdktn/provider-google-beta'

const googleComputeSnapshotSourceDiskEncryptionKey: googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | The name of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey.property.rawKey">rawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>string</code> | Specifies an encryption key stored in Google Cloud KMS, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `kmsKeySelfLink`<sup>Optional</sup> <a name="kmsKeySelfLink" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

The name of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#kms_key_self_link GoogleComputeSnapshot#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#kms_key_service_account GoogleComputeSnapshot#kms_key_service_account}

---

##### `rawKey`<sup>Optional</sup> <a name="rawKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey.property.rawKey"></a>

```typescript
public readonly rawKey: string;
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#raw_key GoogleComputeSnapshot#raw_key}

---

##### `rsaEncryptedKey`<sup>Optional</sup> <a name="rsaEncryptedKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey.property.rsaEncryptedKey"></a>

```typescript
public readonly rsaEncryptedKey: string;
```

- *Type:* string

Specifies an encryption key stored in Google Cloud KMS, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#rsa_encrypted_key GoogleComputeSnapshot#rsa_encrypted_key}

---

### GoogleComputeSnapshotTimeouts <a name="GoogleComputeSnapshotTimeouts" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeouts.Initializer"></a>

```typescript
import { googleComputeSnapshot } from '@cdktn/provider-google-beta'

const googleComputeSnapshotTimeouts: googleComputeSnapshot.GoogleComputeSnapshotTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#create GoogleComputeSnapshot#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#delete GoogleComputeSnapshot#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#update GoogleComputeSnapshot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#create GoogleComputeSnapshot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#delete GoogleComputeSnapshot#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_snapshot#update GoogleComputeSnapshot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference <a name="GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { googleComputeSnapshot } from '@cdktn/provider-google-beta'

new googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink">resetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.resetRawKey">resetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.resetRsaEncryptedKey">resetRsaEncryptedKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeySelfLink` <a name="resetKmsKeySelfLink" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```typescript
public resetKmsKeySelfLink(): void
```

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```typescript
public resetKmsKeyServiceAccount(): void
```

##### `resetRawKey` <a name="resetRawKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.resetRawKey"></a>

```typescript
public resetRawKey(): void
```

##### `resetRsaEncryptedKey` <a name="resetRsaEncryptedKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```typescript
public resetRsaEncryptedKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rawKeyInput">rawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsaEncryptedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey">GoogleComputeSnapshotSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```typescript
public readonly kmsKeySelfLinkInput: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```typescript
public readonly kmsKeyServiceAccountInput: string;
```

- *Type:* string

---

##### `rawKeyInput`<sup>Optional</sup> <a name="rawKeyInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rawKeyInput"></a>

```typescript
public readonly rawKeyInput: string;
```

- *Type:* string

---

##### `rsaEncryptedKeyInput`<sup>Optional</sup> <a name="rsaEncryptedKeyInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```typescript
public readonly rsaEncryptedKeyInput: string;
```

- *Type:* string

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```typescript
public readonly rawKey: string;
```

- *Type:* string

---

##### `rsaEncryptedKey`<sup>Required</sup> <a name="rsaEncryptedKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```typescript
public readonly rsaEncryptedKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeSnapshotSnapshotEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSnapshotEncryptionKey">GoogleComputeSnapshotSnapshotEncryptionKey</a>

---


### GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference <a name="GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { googleComputeSnapshot } from '@cdktn/provider-google-beta'

new googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetKmsKeySelfLink">resetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetRawKey">resetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetRsaEncryptedKey">resetRsaEncryptedKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeySelfLink` <a name="resetKmsKeySelfLink" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```typescript
public resetKmsKeySelfLink(): void
```

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```typescript
public resetKmsKeyServiceAccount(): void
```

##### `resetRawKey` <a name="resetRawKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetRawKey"></a>

```typescript
public resetRawKey(): void
```

##### `resetRsaEncryptedKey` <a name="resetRsaEncryptedKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```typescript
public resetRsaEncryptedKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rawKeyInput">rawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsaEncryptedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey">GoogleComputeSnapshotSourceDiskEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```typescript
public readonly kmsKeySelfLinkInput: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```typescript
public readonly kmsKeyServiceAccountInput: string;
```

- *Type:* string

---

##### `rawKeyInput`<sup>Optional</sup> <a name="rawKeyInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rawKeyInput"></a>

```typescript
public readonly rawKeyInput: string;
```

- *Type:* string

---

##### `rsaEncryptedKeyInput`<sup>Optional</sup> <a name="rsaEncryptedKeyInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```typescript
public readonly rsaEncryptedKeyInput: string;
```

- *Type:* string

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rawKey"></a>

```typescript
public readonly rawKey: string;
```

- *Type:* string

---

##### `rsaEncryptedKey`<sup>Required</sup> <a name="rsaEncryptedKey" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```typescript
public readonly rsaEncryptedKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeSnapshotSourceDiskEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotSourceDiskEncryptionKey">GoogleComputeSnapshotSourceDiskEncryptionKey</a>

---


### GoogleComputeSnapshotTimeoutsOutputReference <a name="GoogleComputeSnapshotTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeSnapshot } from '@cdktn/provider-google-beta'

new googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeouts">GoogleComputeSnapshotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeSnapshotTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeSnapshot.GoogleComputeSnapshotTimeouts">GoogleComputeSnapshotTimeouts</a>

---



