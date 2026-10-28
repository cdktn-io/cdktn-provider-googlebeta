# `googleCloudRunV2Instance` Submodule <a name="`googleCloudRunV2Instance` Submodule" id="@cdktn/provider-google-beta.googleCloudRunV2Instance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudRunV2Instance <a name="GoogleCloudRunV2Instance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance google_cloud_run_v2_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2Instance(scope: Construct, id: string, config: GoogleCloudRunV2InstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig">GoogleCloudRunV2InstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig">GoogleCloudRunV2InstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putContainers">putContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClient">resetClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClientVersion">resetClientVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDefaultUriDisabled">resetDefaultUriDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyRevocationAction">resetEncryptionKeyRevocationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyShutdownDuration">resetEncryptionKeyShutdownDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetIngress">resetIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetInvokerIamDisabled">resetInvokerIamDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLaunchStage">resetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetRestartPolicy">resetRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetVolumes">resetVolumes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContainers` <a name="putContainers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putContainers"></a>

```typescript
public putContainers(value: IResolvable | GoogleCloudRunV2InstanceContainers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putContainers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCloudRunV2InstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

---

##### `putVolumes` <a name="putVolumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putVolumes"></a>

```typescript
public putVolumes(value: IResolvable | GoogleCloudRunV2InstanceVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putVolumes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>[]

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetClient` <a name="resetClient" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClient"></a>

```typescript
public resetClient(): void
```

##### `resetClientVersion` <a name="resetClientVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClientVersion"></a>

```typescript
public resetClientVersion(): void
```

##### `resetDefaultUriDisabled` <a name="resetDefaultUriDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDefaultUriDisabled"></a>

```typescript
public resetDefaultUriDisabled(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetEncryptionKeyRevocationAction` <a name="resetEncryptionKeyRevocationAction" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyRevocationAction"></a>

```typescript
public resetEncryptionKeyRevocationAction(): void
```

##### `resetEncryptionKeyShutdownDuration` <a name="resetEncryptionKeyShutdownDuration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyShutdownDuration"></a>

```typescript
public resetEncryptionKeyShutdownDuration(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngress` <a name="resetIngress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetIngress"></a>

```typescript
public resetIngress(): void
```

##### `resetInvokerIamDisabled` <a name="resetInvokerIamDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetInvokerIamDisabled"></a>

```typescript
public resetInvokerIamDisabled(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLaunchStage` <a name="resetLaunchStage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLaunchStage"></a>

```typescript
public resetLaunchStage(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRestartPolicy` <a name="resetRestartPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetRestartPolicy"></a>

```typescript
public resetRestartPolicy(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetVolumes"></a>

```typescript
public resetVolumes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudRunV2Instance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isConstruct"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

googleCloudRunV2Instance.GoogleCloudRunV2Instance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformElement"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformResource"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleCloudRunV2Instance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudRunV2Instance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudRunV2Instance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudRunV2Instance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList">GoogleCloudRunV2InstanceConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containers">containers</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList">GoogleCloudRunV2InstanceContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containerStatuses">containerStatuses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList">GoogleCloudRunV2InstanceContainerStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.generation">generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lastModifier">lastModifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.logUri">logUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.observedGeneration">observedGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.reconciling">reconciling</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.satisfiesPzs">satisfiesPzs</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terminalCondition">terminalCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList">GoogleCloudRunV2InstanceTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference">GoogleCloudRunV2InstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.urls">urls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList">GoogleCloudRunV2InstanceVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientInput">clientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersionInput">clientVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containersInput">containersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabledInput">defaultUriDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationActionInput">encryptionKeyRevocationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDurationInput">encryptionKeyShutdownDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingressInput">ingressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabledInput">invokerIamDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStageInput">launchStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicyInput">restartPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumesInput">volumesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.client">client</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersion">clientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabled">defaultUriDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationAction">encryptionKeyRevocationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDuration">encryptionKeyShutdownDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingress">ingress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabled">invokerIamDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStage">launchStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicy">restartPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.conditions"></a>

```typescript
public readonly conditions: GoogleCloudRunV2InstanceConditionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList">GoogleCloudRunV2InstanceConditionsList</a>

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containers"></a>

```typescript
public readonly containers: GoogleCloudRunV2InstanceContainersList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList">GoogleCloudRunV2InstanceContainersList</a>

---

##### `containerStatuses`<sup>Required</sup> <a name="containerStatuses" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containerStatuses"></a>

```typescript
public readonly containerStatuses: GoogleCloudRunV2InstanceContainerStatusesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList">GoogleCloudRunV2InstanceContainerStatusesList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.generation"></a>

```typescript
public readonly generation: string;
```

- *Type:* string

---

##### `lastModifier`<sup>Required</sup> <a name="lastModifier" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lastModifier"></a>

```typescript
public readonly lastModifier: string;
```

- *Type:* string

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.logUri"></a>

```typescript
public readonly logUri: string;
```

- *Type:* string

---

##### `observedGeneration`<sup>Required</sup> <a name="observedGeneration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.observedGeneration"></a>

```typescript
public readonly observedGeneration: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `satisfiesPzs`<sup>Required</sup> <a name="satisfiesPzs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.satisfiesPzs"></a>

```typescript
public readonly satisfiesPzs: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `terminalCondition`<sup>Required</sup> <a name="terminalCondition" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terminalCondition"></a>

```typescript
public readonly terminalCondition: GoogleCloudRunV2InstanceTerminalConditionList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList">GoogleCloudRunV2InstanceTerminalConditionList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudRunV2InstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference">GoogleCloudRunV2InstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.urls"></a>

```typescript
public readonly urls: string[];
```

- *Type:* string[]

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumes"></a>

```typescript
public readonly volumes: GoogleCloudRunV2InstanceVolumesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList">GoogleCloudRunV2InstanceVolumesList</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clientInput`<sup>Optional</sup> <a name="clientInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientInput"></a>

```typescript
public readonly clientInput: string;
```

- *Type:* string

---

##### `clientVersionInput`<sup>Optional</sup> <a name="clientVersionInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersionInput"></a>

```typescript
public readonly clientVersionInput: string;
```

- *Type:* string

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containersInput"></a>

```typescript
public readonly containersInput: IResolvable | GoogleCloudRunV2InstanceContainers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>[]

---

##### `defaultUriDisabledInput`<sup>Optional</sup> <a name="defaultUriDisabledInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabledInput"></a>

```typescript
public readonly defaultUriDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: string;
```

- *Type:* string

---

##### `encryptionKeyRevocationActionInput`<sup>Optional</sup> <a name="encryptionKeyRevocationActionInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationActionInput"></a>

```typescript
public readonly encryptionKeyRevocationActionInput: string;
```

- *Type:* string

---

##### `encryptionKeyShutdownDurationInput`<sup>Optional</sup> <a name="encryptionKeyShutdownDurationInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDurationInput"></a>

```typescript
public readonly encryptionKeyShutdownDurationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingressInput"></a>

```typescript
public readonly ingressInput: string;
```

- *Type:* string

---

##### `invokerIamDisabledInput`<sup>Optional</sup> <a name="invokerIamDisabledInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabledInput"></a>

```typescript
public readonly invokerIamDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `launchStageInput`<sup>Optional</sup> <a name="launchStageInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStageInput"></a>

```typescript
public readonly launchStageInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `restartPolicyInput`<sup>Optional</sup> <a name="restartPolicyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicyInput"></a>

```typescript
public readonly restartPolicyInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCloudRunV2InstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumesInput"></a>

```typescript
public readonly volumesInput: IResolvable | GoogleCloudRunV2InstanceVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>[]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.client"></a>

```typescript
public readonly client: string;
```

- *Type:* string

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

---

##### `defaultUriDisabled`<sup>Required</sup> <a name="defaultUriDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabled"></a>

```typescript
public readonly defaultUriDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

---

##### `encryptionKeyRevocationAction`<sup>Required</sup> <a name="encryptionKeyRevocationAction" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationAction"></a>

```typescript
public readonly encryptionKeyRevocationAction: string;
```

- *Type:* string

---

##### `encryptionKeyShutdownDuration`<sup>Required</sup> <a name="encryptionKeyShutdownDuration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDuration"></a>

```typescript
public readonly encryptionKeyShutdownDuration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingress"></a>

```typescript
public readonly ingress: string;
```

- *Type:* string

---

##### `invokerIamDisabled`<sup>Required</sup> <a name="invokerIamDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabled"></a>

```typescript
public readonly invokerIamDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `launchStage`<sup>Required</sup> <a name="launchStage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStage"></a>

```typescript
public readonly launchStage: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `restartPolicy`<sup>Required</sup> <a name="restartPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudRunV2InstanceConditions <a name="GoogleCloudRunV2InstanceConditions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceConditions: googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions = { ... }
```


### GoogleCloudRunV2InstanceConfig <a name="GoogleCloudRunV2InstanceConfig" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceConfig: googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.containers">containers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>[]</code> | containers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.location">location</a></code> | <code>string</code> | The location of the cloud run instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.name">name</a></code> | <code>string</code> | Name of the Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.client">client</a></code> | <code>string</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.clientVersion">clientVersion</a></code> | <code>string</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.defaultUriDisabled">defaultUriDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disables public resolution of the default URI of this Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyRevocationAction">encryptionKeyRevocationAction</a></code> | <code>string</code> | The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyShutdownDuration">encryptionKeyShutdownDuration</a></code> | <code>string</code> | If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#id GoogleCloudRunV2Instance#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.ingress">ingress</a></code> | <code>string</code> | Provides the ingress settings for this Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.invokerIamDisabled">invokerIamDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.launchStage">launchStage</a></code> | <code>string</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#project GoogleCloudRunV2Instance#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.restartPolicy">restartPolicy</a></code> | <code>string</code> | Restart policy for the Instance. If not provided, the default is ON_FAILURE. Possible values: ["ALWAYS", "ON_FAILURE", "NEVER"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Email address of the IAM service account associated with the Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.volumes">volumes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>[]</code> | volumes block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.containers"></a>

```typescript
public readonly containers: IResolvable | GoogleCloudRunV2InstanceContainers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>[]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#containers GoogleCloudRunV2Instance#containers}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the cloud run instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#location GoogleCloudRunV2Instance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#annotations GoogleCloudRunV2Instance#annotations}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.client"></a>

```typescript
public readonly client: string;
```

- *Type:* string

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#client GoogleCloudRunV2Instance#client}

---

##### `clientVersion`<sup>Optional</sup> <a name="clientVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#client_version GoogleCloudRunV2Instance#client_version}

---

##### `defaultUriDisabled`<sup>Optional</sup> <a name="defaultUriDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.defaultUriDisabled"></a>

```typescript
public readonly defaultUriDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disables public resolution of the default URI of this Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#default_uri_disabled GoogleCloudRunV2Instance#default_uri_disabled}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#deletion_policy GoogleCloudRunV2Instance#deletion_policy}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key GoogleCloudRunV2Instance#encryption_key}

---

##### `encryptionKeyRevocationAction`<sup>Optional</sup> <a name="encryptionKeyRevocationAction" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyRevocationAction"></a>

```typescript
public readonly encryptionKeyRevocationAction: string;
```

- *Type:* string

The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key_revocation_action GoogleCloudRunV2Instance#encryption_key_revocation_action}

---

##### `encryptionKeyShutdownDuration`<sup>Optional</sup> <a name="encryptionKeyShutdownDuration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyShutdownDuration"></a>

```typescript
public readonly encryptionKeyShutdownDuration: string;
```

- *Type:* string

If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances.

The minimum increment is 1 hour.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key_shutdown_duration GoogleCloudRunV2Instance#encryption_key_shutdown_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#id GoogleCloudRunV2Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.ingress"></a>

```typescript
public readonly ingress: string;
```

- *Type:* string

Provides the ingress settings for this Instance.

On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. Possible values: ["INGRESS_TRAFFIC_ALL", "INGRESS_TRAFFIC_INTERNAL_ONLY", "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#ingress GoogleCloudRunV2Instance#ingress}

---

##### `invokerIamDisabled`<sup>Optional</sup> <a name="invokerIamDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.invokerIamDisabled"></a>

```typescript
public readonly invokerIamDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#invoker_iam_disabled GoogleCloudRunV2Instance#invoker_iam_disabled}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#labels GoogleCloudRunV2Instance#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.launchStage"></a>

```typescript
public readonly launchStage: string;
```

- *Type:* string

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#launch_stage GoogleCloudRunV2Instance#launch_stage}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#project GoogleCloudRunV2Instance#project}.

---

##### `restartPolicy`<sup>Optional</sup> <a name="restartPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: string;
```

- *Type:* string

Restart policy for the Instance. If not provided, the default is ON_FAILURE. Possible values: ["ALWAYS", "ON_FAILURE", "NEVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#restart_policy GoogleCloudRunV2Instance#restart_policy}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Email address of the IAM service account associated with the Instance.

The service account represents the identity of the running Instance, and determines what permissions the instance has.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service_account GoogleCloudRunV2Instance#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudRunV2InstanceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeouts GoogleCloudRunV2Instance#timeouts}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.volumes"></a>

```typescript
public readonly volumes: IResolvable | GoogleCloudRunV2InstanceVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>[]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#volumes GoogleCloudRunV2Instance#volumes}

---

### GoogleCloudRunV2InstanceContainers <a name="GoogleCloudRunV2InstanceContainers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainers: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.image">image</a></code> | <code>string</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.args">args</a></code> | <code>string[]</code> | Arguments to the entrypoint. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.command">command</a></code> | <code>string[]</code> | Entrypoint array. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.env">env</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>[]</code> | env block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.name">name</a></code> | <code>string</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.ports">ports</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>[]</code> | ports block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a></code> | resources block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a></code> | startup_probe block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.volumeMounts">volumeMounts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>[]</code> | volume_mounts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.workingDir">workingDir</a></code> | <code>string</code> | Container's working directory. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#image GoogleCloudRunV2Instance#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#args GoogleCloudRunV2Instance#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#command GoogleCloudRunV2Instance#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.env"></a>

```typescript
public readonly env: IResolvable | GoogleCloudRunV2InstanceContainersEnv[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#env GoogleCloudRunV2Instance#env}

---

##### `livenessProbe`<sup>Optional</sup> <a name="livenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.livenessProbe"></a>

```typescript
public readonly livenessProbe: GoogleCloudRunV2InstanceContainersLivenessProbe;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#liveness_probe GoogleCloudRunV2Instance#liveness_probe}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.ports"></a>

```typescript
public readonly ports: IResolvable | GoogleCloudRunV2InstanceContainersPorts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#ports GoogleCloudRunV2Instance#ports}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.resources"></a>

```typescript
public readonly resources: GoogleCloudRunV2InstanceContainersResources;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#resources GoogleCloudRunV2Instance#resources}

---

##### `startupProbe`<sup>Optional</sup> <a name="startupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.startupProbe"></a>

```typescript
public readonly startupProbe: GoogleCloudRunV2InstanceContainersStartupProbe;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#startup_probe GoogleCloudRunV2Instance#startup_probe}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: IResolvable | GoogleCloudRunV2InstanceContainersVolumeMounts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>[]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#volume_mounts GoogleCloudRunV2Instance#volume_mounts}

---

##### `workingDir`<sup>Optional</sup> <a name="workingDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#working_dir GoogleCloudRunV2Instance#working_dir}

---

### GoogleCloudRunV2InstanceContainersEnv <a name="GoogleCloudRunV2InstanceContainersEnv" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainersEnv: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.name">name</a></code> | <code>string</code> | Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.value">value</a></code> | <code>string</code> | Literal value of the environment variable. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.valueSource">valueSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a></code> | value_source block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Literal value of the environment variable.

Defaults to "" and the maximum allowed length is 32768 characters. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value GoogleCloudRunV2Instance#value}

---

##### `valueSource`<sup>Optional</sup> <a name="valueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.valueSource"></a>

```typescript
public readonly valueSource: GoogleCloudRunV2InstanceContainersEnvValueSource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value_source GoogleCloudRunV2Instance#value_source}

---

### GoogleCloudRunV2InstanceContainersEnvValueSource <a name="GoogleCloudRunV2InstanceContainersEnvValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainersEnvValueSource: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `secretKeyRef`<sup>Optional</sup> <a name="secretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource.property.secretKeyRef"></a>

```typescript
public readonly secretKeyRef: GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret_key_ref GoogleCloudRunV2Instance#secret_key_ref}

---

### GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef <a name="GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.secret">secret</a></code> | <code>string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.version">version</a></code> | <code>string</code> | The Cloud Secret Manager secret version. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#version GoogleCloudRunV2Instance#version}

---

### GoogleCloudRunV2InstanceContainersLivenessProbe <a name="GoogleCloudRunV2InstanceContainersLivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainersLivenessProbe: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.httpGet">httpGet</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Optional. |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Optional.

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#failure_threshold GoogleCloudRunV2Instance#failure_threshold}

---

##### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.grpc"></a>

```typescript
public readonly grpc: GoogleCloudRunV2InstanceContainersLivenessProbeGrpc;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#grpc GoogleCloudRunV2Instance#grpc}

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.httpGet"></a>

```typescript
public readonly httpGet: GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_get GoogleCloudRunV2Instance#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

Optional.

Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#initial_delay_seconds GoogleCloudRunV2Instance#initial_delay_seconds}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

Optional.

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#period_seconds GoogleCloudRunV2Instance#period_seconds}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Optional.

Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeout_seconds GoogleCloudRunV2Instance#timeout_seconds}

---

### GoogleCloudRunV2InstanceContainersLivenessProbeGrpc <a name="GoogleCloudRunV2InstanceContainersLivenessProbeGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainersLivenessProbeGrpc: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.port">port</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.service">service</a></code> | <code>string</code> | Optional. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Optional.

Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Optional.

Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service GoogleCloudRunV2Instance#service}

---

### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainersLivenessProbeHttpGet: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]</code> | http_headers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.path">path</a></code> | <code>string</code> | Optional. Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.port">port</a></code> | <code>number</code> | Optional. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: IResolvable | GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_headers GoogleCloudRunV2Instance#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Optional. Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>string</code> | Required. The header field name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>string</code> | Optional. The header field value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Required. The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Optional. The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value GoogleCloudRunV2Instance#value}

---

### GoogleCloudRunV2InstanceContainersPorts <a name="GoogleCloudRunV2InstanceContainersPorts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainersPorts: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.containerPort">containerPort</a></code> | <code>number</code> | Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.name">name</a></code> | <code>string</code> | If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". |

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#container_port GoogleCloudRunV2Instance#container_port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

### GoogleCloudRunV2InstanceContainersResources <a name="GoogleCloudRunV2InstanceContainersResources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainersResources: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | Only memory and CPU are supported. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Only memory and CPU are supported.

Use key 'cpu' for CPU limit, 'memory' for memory limit. Note: The only supported values for CPU are '1', '2', '4', '6', and '8'. Setting 4 CPU requires at least 2Gi of memory, setting 6 or more CPU requires at least 4Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#limits GoogleCloudRunV2Instance#limits}

---

### GoogleCloudRunV2InstanceContainersStartupProbe <a name="GoogleCloudRunV2InstanceContainersStartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainersStartupProbe: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.httpGet">httpGet</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Optional. |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Optional.

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#failure_threshold GoogleCloudRunV2Instance#failure_threshold}

---

##### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.grpc"></a>

```typescript
public readonly grpc: GoogleCloudRunV2InstanceContainersStartupProbeGrpc;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#grpc GoogleCloudRunV2Instance#grpc}

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.httpGet"></a>

```typescript
public readonly httpGet: GoogleCloudRunV2InstanceContainersStartupProbeHttpGet;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_get GoogleCloudRunV2Instance#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

Optional.

Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#initial_delay_seconds GoogleCloudRunV2Instance#initial_delay_seconds}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

Optional.

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#period_seconds GoogleCloudRunV2Instance#period_seconds}

---

##### `tcpSocket`<sup>Optional</sup> <a name="tcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.tcpSocket"></a>

```typescript
public readonly tcpSocket: GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#tcp_socket GoogleCloudRunV2Instance#tcp_socket}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Optional.

Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeout_seconds GoogleCloudRunV2Instance#timeout_seconds}

---

### GoogleCloudRunV2InstanceContainersStartupProbeGrpc <a name="GoogleCloudRunV2InstanceContainersStartupProbeGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainersStartupProbeGrpc: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.port">port</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.service">service</a></code> | <code>string</code> | Optional. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Optional.

Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Optional.

Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service GoogleCloudRunV2Instance#service}

---

### GoogleCloudRunV2InstanceContainersStartupProbeHttpGet <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainersStartupProbeHttpGet: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | http_headers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.path">path</a></code> | <code>string</code> | Optional. Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.port">port</a></code> | <code>number</code> | Optional. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: IResolvable | GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_headers GoogleCloudRunV2Instance#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Optional. Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>string</code> | Required. The header field name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>string</code> | Optional. The header field value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Required. The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Optional. The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value GoogleCloudRunV2Instance#value}

---

### GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket <a name="GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainersStartupProbeTcpSocket: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket.property.port">port</a></code> | <code>number</code> | Optional. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

### GoogleCloudRunV2InstanceContainerStatuses <a name="GoogleCloudRunV2InstanceContainerStatuses" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainerStatuses: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses = { ... }
```


### GoogleCloudRunV2InstanceContainersVolumeMounts <a name="GoogleCloudRunV2InstanceContainersVolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceContainersVolumeMounts: googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.mountPath">mountPath</a></code> | <code>string</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.name">name</a></code> | <code>string</code> | This must match the Name of a Volume. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.subPath">subPath</a></code> | <code>string</code> | Path within the volume from which the container's volume should be mounted. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#mount_path GoogleCloudRunV2Instance#mount_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `subPath`<sup>Optional</sup> <a name="subPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.subPath"></a>

```typescript
public readonly subPath: string;
```

- *Type:* string

Path within the volume from which the container's volume should be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#sub_path GoogleCloudRunV2Instance#sub_path}

---

### GoogleCloudRunV2InstanceTerminalCondition <a name="GoogleCloudRunV2InstanceTerminalCondition" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceTerminalCondition: googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition = { ... }
```


### GoogleCloudRunV2InstanceTimeouts <a name="GoogleCloudRunV2InstanceTimeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceTimeouts: googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#create GoogleCloudRunV2Instance#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#delete GoogleCloudRunV2Instance#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#update GoogleCloudRunV2Instance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#create GoogleCloudRunV2Instance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#delete GoogleCloudRunV2Instance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#update GoogleCloudRunV2Instance#update}.

---

### GoogleCloudRunV2InstanceVolumes <a name="GoogleCloudRunV2InstanceVolumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceVolumes: googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.name">name</a></code> | <code>string</code> | Volume's name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.gcs">gcs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a></code> | gcs block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a></code> | nfs block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a></code> | secret block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `cloudSqlInstance`<sup>Optional</sup> <a name="cloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.cloudSqlInstance"></a>

```typescript
public readonly cloudSqlInstance: GoogleCloudRunV2InstanceVolumesCloudSqlInstance;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#cloud_sql_instance GoogleCloudRunV2Instance#cloud_sql_instance}

---

##### `emptyDir`<sup>Optional</sup> <a name="emptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.emptyDir"></a>

```typescript
public readonly emptyDir: GoogleCloudRunV2InstanceVolumesEmptyDir;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#empty_dir GoogleCloudRunV2Instance#empty_dir}

---

##### `gcs`<sup>Optional</sup> <a name="gcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.gcs"></a>

```typescript
public readonly gcs: GoogleCloudRunV2InstanceVolumesGcs;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#gcs GoogleCloudRunV2Instance#gcs}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.nfs"></a>

```typescript
public readonly nfs: GoogleCloudRunV2InstanceVolumesNfs;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#nfs GoogleCloudRunV2Instance#nfs}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.secret"></a>

```typescript
public readonly secret: GoogleCloudRunV2InstanceVolumesSecret;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

### GoogleCloudRunV2InstanceVolumesCloudSqlInstance <a name="GoogleCloudRunV2InstanceVolumesCloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceVolumesCloudSqlInstance: googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance.property.instances">instances</a></code> | <code>string[]</code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#instances GoogleCloudRunV2Instance#instances}

---

### GoogleCloudRunV2InstanceVolumesEmptyDir <a name="GoogleCloudRunV2InstanceVolumesEmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceVolumesEmptyDir: googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.medium">medium</a></code> | <code>string</code> | The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY", "DISK"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.sizeLimit">sizeLimit</a></code> | <code>string</code> | Limit on the storage usable by this EmptyDir volume. |

---

##### `medium`<sup>Optional</sup> <a name="medium" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.medium"></a>

```typescript
public readonly medium: string;
```

- *Type:* string

The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY", "DISK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#medium GoogleCloudRunV2Instance#medium}

---

##### `sizeLimit`<sup>Optional</sup> <a name="sizeLimit" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.sizeLimit"></a>

```typescript
public readonly sizeLimit: string;
```

- *Type:* string

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#size_limit GoogleCloudRunV2Instance#size_limit}

---

### GoogleCloudRunV2InstanceVolumesGcs <a name="GoogleCloudRunV2InstanceVolumesGcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceVolumesGcs: googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.bucket">bucket</a></code> | <code>string</code> | GCS Bucket name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | A list of flags to pass to the gcsfuse command for configuring this volume. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.readOnly">readOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, mount the GCS bucket as read-only. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

GCS Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#bucket GoogleCloudRunV2Instance#bucket}

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

A list of flags to pass to the gcsfuse command for configuring this volume.

Flags should be passed without leading dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#mount_options GoogleCloudRunV2Instance#mount_options}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, mount the GCS bucket as read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#read_only GoogleCloudRunV2Instance#read_only}

---

### GoogleCloudRunV2InstanceVolumesNfs <a name="GoogleCloudRunV2InstanceVolumesNfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceVolumesNfs: googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.path">path</a></code> | <code>string</code> | Path that is exported by the NFS server. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.server">server</a></code> | <code>string</code> | Hostname or IP address of the NFS server. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.readOnly">readOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, mount the NFS volume as read only. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path that is exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Hostname or IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#server GoogleCloudRunV2Instance#server}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, mount the NFS volume as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#read_only GoogleCloudRunV2Instance#read_only}

---

### GoogleCloudRunV2InstanceVolumesSecret <a name="GoogleCloudRunV2InstanceVolumesSecret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceVolumesSecret: googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.secret">secret</a></code> | <code>string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.defaultMode">defaultMode</a></code> | <code>number</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.items">items</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>[]</code> | items block. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

##### `defaultMode`<sup>Optional</sup> <a name="defaultMode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.defaultMode"></a>

```typescript
public readonly defaultMode: number;
```

- *Type:* number

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#default_mode GoogleCloudRunV2Instance#default_mode}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.items"></a>

```typescript
public readonly items: IResolvable | GoogleCloudRunV2InstanceVolumesSecretItems[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>[]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#items GoogleCloudRunV2Instance#items}

---

### GoogleCloudRunV2InstanceVolumesSecretItems <a name="GoogleCloudRunV2InstanceVolumesSecretItems" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

const googleCloudRunV2InstanceVolumesSecretItems: googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.path">path</a></code> | <code>string</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.mode">mode</a></code> | <code>number</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.version">version</a></code> | <code>string</code> | The Cloud Secret Manager secret version. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#mode GoogleCloudRunV2Instance#mode}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#version GoogleCloudRunV2Instance#version}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudRunV2InstanceConditionsList <a name="GoogleCloudRunV2InstanceConditionsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2InstanceConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleCloudRunV2InstanceConditionsOutputReference <a name="GoogleCloudRunV2InstanceConditionsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.instanceReason">instanceReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions">GoogleCloudRunV2InstanceConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceReason`<sup>Required</sup> <a name="instanceReason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.instanceReason"></a>

```typescript
public readonly instanceReason: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceConditions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions">GoogleCloudRunV2InstanceConditions</a>

---


### GoogleCloudRunV2InstanceContainersEnvList <a name="GoogleCloudRunV2InstanceContainersEnvList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2InstanceContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceContainersEnv[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>[]

---


### GoogleCloudRunV2InstanceContainersEnvOutputReference <a name="GoogleCloudRunV2InstanceContainersEnvOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.putValueSource">putValueSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValueSource">resetValueSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueSource` <a name="putValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.putValueSource"></a>

```typescript
public putValueSource(value: GoogleCloudRunV2InstanceContainersEnvValueSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.putValueSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

---

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueSource` <a name="resetValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValueSource"></a>

```typescript
public resetValueSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSource">valueSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSourceInput">valueSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSource"></a>

```typescript
public readonly valueSource: GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valueSourceInput`<sup>Optional</sup> <a name="valueSourceInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSourceInput"></a>

```typescript
public readonly valueSourceInput: GoogleCloudRunV2InstanceContainersEnvValueSource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceContainersEnv;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>

---


### GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference <a name="GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef">putSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resetSecretKeyRef">resetSecretKeyRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretKeyRef` <a name="putSecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```typescript
public putSecretKeyRef(value: GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---

##### `resetSecretKeyRef` <a name="resetSecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```typescript
public resetSecretKeyRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRefInput">secretKeyRefInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretKeyRef`<sup>Required</sup> <a name="secretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```typescript
public readonly secretKeyRef: GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `secretKeyRefInput`<sup>Optional</sup> <a name="secretKeyRefInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```typescript
public readonly secretKeyRefInput: GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceContainersEnvValueSource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

---


### GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference <a name="GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---


### GoogleCloudRunV2InstanceContainersList <a name="GoogleCloudRunV2InstanceContainersList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2InstanceContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceContainers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>[]

---


### GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetService` <a name="resetService" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceContainersLivenessProbeGrpc;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

---


### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]

---


### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>

---


### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders">putHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpHeaders` <a name="putHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders"></a>

```typescript
public putHttpHeaders(value: IResolvable | GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]

---

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: IResolvable | GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---


### GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc">putGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetGrpc">resetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrpc` <a name="putGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc"></a>

```typescript
public putGrpc(value: GoogleCloudRunV2InstanceContainersLivenessProbeGrpc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

---

##### `putHttpGet` <a name="putHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet"></a>

```typescript
public putHttpGet(value: GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetGrpc` <a name="resetGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetGrpc"></a>

```typescript
public resetGrpc(): void
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetHttpGet"></a>

```typescript
public resetHttpGet(): void
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```typescript
public resetInitialDelaySeconds(): void
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetPeriodSeconds"></a>

```typescript
public resetPeriodSeconds(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpcInput">grpcInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpc"></a>

```typescript
public readonly grpc: GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference</a>

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGet"></a>

```typescript
public readonly httpGet: GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference</a>

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `grpcInput`<sup>Optional</sup> <a name="grpcInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpcInput"></a>

```typescript
public readonly grpcInput: GoogleCloudRunV2InstanceContainersLivenessProbeGrpc;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGetInput"></a>

```typescript
public readonly httpGetInput: GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```typescript
public readonly initialDelaySecondsInput: number;
```

- *Type:* number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSecondsInput"></a>

```typescript
public readonly periodSecondsInput: number;
```

- *Type:* number

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceContainersLivenessProbe;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

---


### GoogleCloudRunV2InstanceContainersOutputReference <a name="GoogleCloudRunV2InstanceContainersOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe">putLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe">putStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetLivenessProbe">resetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetStartupProbe">resetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetWorkingDir">resetWorkingDir</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putEnv"></a>

```typescript
public putEnv(value: IResolvable | GoogleCloudRunV2InstanceContainersEnv[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>[]

---

##### `putLivenessProbe` <a name="putLivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe"></a>

```typescript
public putLivenessProbe(value: GoogleCloudRunV2InstanceContainersLivenessProbe): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

---

##### `putPorts` <a name="putPorts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putPorts"></a>

```typescript
public putPorts(value: IResolvable | GoogleCloudRunV2InstanceContainersPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>[]

---

##### `putResources` <a name="putResources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putResources"></a>

```typescript
public putResources(value: GoogleCloudRunV2InstanceContainersResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

---

##### `putStartupProbe` <a name="putStartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe"></a>

```typescript
public putStartupProbe(value: GoogleCloudRunV2InstanceContainersStartupProbe): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putVolumeMounts"></a>

```typescript
public putVolumeMounts(value: IResolvable | GoogleCloudRunV2InstanceContainersVolumeMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetLivenessProbe` <a name="resetLivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetLivenessProbe"></a>

```typescript
public resetLivenessProbe(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetStartupProbe` <a name="resetStartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetStartupProbe"></a>

```typescript
public resetStartupProbe(): void
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetVolumeMounts"></a>

```typescript
public resetVolumeMounts(): void
```

##### `resetWorkingDir` <a name="resetWorkingDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetWorkingDir"></a>

```typescript
public resetWorkingDir(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList">GoogleCloudRunV2InstanceContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList">GoogleCloudRunV2InstanceContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference">GoogleCloudRunV2InstanceContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList">GoogleCloudRunV2InstanceContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.envInput">envInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbeInput">livenessProbeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.portsInput">portsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbeInput">startupProbeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDirInput">workingDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDir">workingDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.env"></a>

```typescript
public readonly env: GoogleCloudRunV2InstanceContainersEnvList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList">GoogleCloudRunV2InstanceContainersEnvList</a>

---

##### `livenessProbe`<sup>Required</sup> <a name="livenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbe"></a>

```typescript
public readonly livenessProbe: GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.ports"></a>

```typescript
public readonly ports: GoogleCloudRunV2InstanceContainersPortsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList">GoogleCloudRunV2InstanceContainersPortsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resources"></a>

```typescript
public readonly resources: GoogleCloudRunV2InstanceContainersResourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference">GoogleCloudRunV2InstanceContainersResourcesOutputReference</a>

---

##### `startupProbe`<sup>Required</sup> <a name="startupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbe"></a>

```typescript
public readonly startupProbe: GoogleCloudRunV2InstanceContainersStartupProbeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeOutputReference</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: GoogleCloudRunV2InstanceContainersVolumeMountsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList">GoogleCloudRunV2InstanceContainersVolumeMountsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.envInput"></a>

```typescript
public readonly envInput: IResolvable | GoogleCloudRunV2InstanceContainersEnv[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `livenessProbeInput`<sup>Optional</sup> <a name="livenessProbeInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbeInput"></a>

```typescript
public readonly livenessProbeInput: GoogleCloudRunV2InstanceContainersLivenessProbe;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: IResolvable | GoogleCloudRunV2InstanceContainersPorts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: GoogleCloudRunV2InstanceContainersResources;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

---

##### `startupProbeInput`<sup>Optional</sup> <a name="startupProbeInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbeInput"></a>

```typescript
public readonly startupProbeInput: GoogleCloudRunV2InstanceContainersStartupProbe;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMountsInput"></a>

```typescript
public readonly volumeMountsInput: IResolvable | GoogleCloudRunV2InstanceContainersVolumeMounts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>[]

---

##### `workingDirInput`<sup>Optional</sup> <a name="workingDirInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDirInput"></a>

```typescript
public readonly workingDirInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceContainers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>

---


### GoogleCloudRunV2InstanceContainersPortsList <a name="GoogleCloudRunV2InstanceContainersPortsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2InstanceContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceContainersPorts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>[]

---


### GoogleCloudRunV2InstanceContainersPortsOutputReference <a name="GoogleCloudRunV2InstanceContainersPortsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetContainerPort"></a>

```typescript
public resetContainerPort(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPortInput"></a>

```typescript
public readonly containerPortInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceContainersPorts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>

---


### GoogleCloudRunV2InstanceContainersResourcesOutputReference <a name="GoogleCloudRunV2InstanceContainersResourcesOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resetLimits">resetLimits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimits` <a name="resetLimits" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resetLimits"></a>

```typescript
public resetLimits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limitsInput">limitsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limitsInput"></a>

```typescript
public readonly limitsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceContainersResources;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetService` <a name="resetService" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceContainersStartupProbeGrpc;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]

---


### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders">putHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpHeaders` <a name="putHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders"></a>

```typescript
public putHttpHeaders(value: IResolvable | GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]

---

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: IResolvable | GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceContainersStartupProbeHttpGet;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc">putGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket">putTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetGrpc">resetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTcpSocket">resetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrpc` <a name="putGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc"></a>

```typescript
public putGrpc(value: GoogleCloudRunV2InstanceContainersStartupProbeGrpc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

---

##### `putHttpGet` <a name="putHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet"></a>

```typescript
public putHttpGet(value: GoogleCloudRunV2InstanceContainersStartupProbeHttpGet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

---

##### `putTcpSocket` <a name="putTcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket"></a>

```typescript
public putTcpSocket(value: GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetGrpc` <a name="resetGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetGrpc"></a>

```typescript
public resetGrpc(): void
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetHttpGet"></a>

```typescript
public resetHttpGet(): void
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetInitialDelaySeconds"></a>

```typescript
public resetInitialDelaySeconds(): void
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetPeriodSeconds"></a>

```typescript
public resetPeriodSeconds(): void
```

##### `resetTcpSocket` <a name="resetTcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTcpSocket"></a>

```typescript
public resetTcpSocket(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpcInput">grpcInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocketInput">tcpSocketInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpc"></a>

```typescript
public readonly grpc: GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference</a>

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGet"></a>

```typescript
public readonly httpGet: GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference</a>

---

##### `tcpSocket`<sup>Required</sup> <a name="tcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocket"></a>

```typescript
public readonly tcpSocket: GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference</a>

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `grpcInput`<sup>Optional</sup> <a name="grpcInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpcInput"></a>

```typescript
public readonly grpcInput: GoogleCloudRunV2InstanceContainersStartupProbeGrpc;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGetInput"></a>

```typescript
public readonly httpGetInput: GoogleCloudRunV2InstanceContainersStartupProbeHttpGet;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySecondsInput"></a>

```typescript
public readonly initialDelaySecondsInput: number;
```

- *Type:* number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSecondsInput"></a>

```typescript
public readonly periodSecondsInput: number;
```

- *Type:* number

---

##### `tcpSocketInput`<sup>Optional</sup> <a name="tcpSocketInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocketInput"></a>

```typescript
public readonly tcpSocketInput: GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceContainersStartupProbe;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---


### GoogleCloudRunV2InstanceContainerStatusesList <a name="GoogleCloudRunV2InstanceContainerStatusesList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2InstanceContainerStatusesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleCloudRunV2InstanceContainerStatusesOutputReference <a name="GoogleCloudRunV2InstanceContainerStatusesOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses">GoogleCloudRunV2InstanceContainerStatuses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceContainerStatuses;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses">GoogleCloudRunV2InstanceContainerStatuses</a>

---


### GoogleCloudRunV2InstanceContainersVolumeMountsList <a name="GoogleCloudRunV2InstanceContainersVolumeMountsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceContainersVolumeMounts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>[]

---


### GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference <a name="GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resetSubPath">resetSubPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubPath` <a name="resetSubPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resetSubPath"></a>

```typescript
public resetSubPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPathInput">subPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPath">subPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `subPathInput`<sup>Optional</sup> <a name="subPathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPathInput"></a>

```typescript
public readonly subPathInput: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subPath`<sup>Required</sup> <a name="subPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPath"></a>

```typescript
public readonly subPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceContainersVolumeMounts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>

---


### GoogleCloudRunV2InstanceTerminalConditionList <a name="GoogleCloudRunV2InstanceTerminalConditionList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2InstanceTerminalConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleCloudRunV2InstanceTerminalConditionOutputReference <a name="GoogleCloudRunV2InstanceTerminalConditionOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.instanceReason">instanceReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition">GoogleCloudRunV2InstanceTerminalCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceReason`<sup>Required</sup> <a name="instanceReason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.instanceReason"></a>

```typescript
public readonly instanceReason: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceTerminalCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition">GoogleCloudRunV2InstanceTerminalCondition</a>

---


### GoogleCloudRunV2InstanceTimeoutsOutputReference <a name="GoogleCloudRunV2InstanceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

---


### GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference <a name="GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resetInstances">resetInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstances` <a name="resetInstances" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```typescript
public resetInstances(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instancesInput">instancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instances">instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```typescript
public readonly instancesInput: string[];
```

- *Type:* string[]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceVolumesCloudSqlInstance;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

---


### GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference <a name="GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetMedium">resetMedium</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetSizeLimit">resetSizeLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMedium` <a name="resetMedium" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetMedium"></a>

```typescript
public resetMedium(): void
```

##### `resetSizeLimit` <a name="resetSizeLimit" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetSizeLimit"></a>

```typescript
public resetSizeLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.mediumInput">mediumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimitInput">sizeLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.medium">medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimit">sizeLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mediumInput`<sup>Optional</sup> <a name="mediumInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.mediumInput"></a>

```typescript
public readonly mediumInput: string;
```

- *Type:* string

---

##### `sizeLimitInput`<sup>Optional</sup> <a name="sizeLimitInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```typescript
public readonly sizeLimitInput: string;
```

- *Type:* string

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.medium"></a>

```typescript
public readonly medium: string;
```

- *Type:* string

---

##### `sizeLimit`<sup>Required</sup> <a name="sizeLimit" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```typescript
public readonly sizeLimit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceVolumesEmptyDir;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

---


### GoogleCloudRunV2InstanceVolumesGcsOutputReference <a name="GoogleCloudRunV2InstanceVolumesGcsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: string[];
```

- *Type:* string[]

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceVolumesGcs;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

---


### GoogleCloudRunV2InstanceVolumesList <a name="GoogleCloudRunV2InstanceVolumesList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2InstanceVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>[]

---


### GoogleCloudRunV2InstanceVolumesNfsOutputReference <a name="GoogleCloudRunV2InstanceVolumesNfsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceVolumesNfs;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

---


### GoogleCloudRunV2InstanceVolumesOutputReference <a name="GoogleCloudRunV2InstanceVolumesOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance">putCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putEmptyDir">putEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs">putGcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs">putNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetCloudSqlInstance">resetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetEmptyDir">resetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetGcs">resetGcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetNfs">resetNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudSqlInstance` <a name="putCloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance"></a>

```typescript
public putCloudSqlInstance(value: GoogleCloudRunV2InstanceVolumesCloudSqlInstance): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

---

##### `putEmptyDir` <a name="putEmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putEmptyDir"></a>

```typescript
public putEmptyDir(value: GoogleCloudRunV2InstanceVolumesEmptyDir): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putEmptyDir.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

---

##### `putGcs` <a name="putGcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs"></a>

```typescript
public putGcs(value: GoogleCloudRunV2InstanceVolumesGcs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

---

##### `putNfs` <a name="putNfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs"></a>

```typescript
public putNfs(value: GoogleCloudRunV2InstanceVolumesNfs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

---

##### `putSecret` <a name="putSecret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret"></a>

```typescript
public putSecret(value: GoogleCloudRunV2InstanceVolumesSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

---

##### `resetCloudSqlInstance` <a name="resetCloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetCloudSqlInstance"></a>

```typescript
public resetCloudSqlInstance(): void
```

##### `resetEmptyDir` <a name="resetEmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetEmptyDir"></a>

```typescript
public resetEmptyDir(): void
```

##### `resetGcs` <a name="resetGcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetGcs"></a>

```typescript
public resetGcs(): void
```

##### `resetNfs` <a name="resetNfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetNfs"></a>

```typescript
public resetNfs(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference">GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcs">gcs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference">GoogleCloudRunV2InstanceVolumesGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference">GoogleCloudRunV2InstanceVolumesNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference">GoogleCloudRunV2InstanceVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstanceInput">cloudSqlInstanceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDirInput">emptyDirInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcsInput">gcsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfsInput">nfsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secretInput">secretInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudSqlInstance`<sup>Required</sup> <a name="cloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstance"></a>

```typescript
public readonly cloudSqlInstance: GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference</a>

---

##### `emptyDir`<sup>Required</sup> <a name="emptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDir"></a>

```typescript
public readonly emptyDir: GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference">GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference</a>

---

##### `gcs`<sup>Required</sup> <a name="gcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcs"></a>

```typescript
public readonly gcs: GoogleCloudRunV2InstanceVolumesGcsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference">GoogleCloudRunV2InstanceVolumesGcsOutputReference</a>

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfs"></a>

```typescript
public readonly nfs: GoogleCloudRunV2InstanceVolumesNfsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference">GoogleCloudRunV2InstanceVolumesNfsOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secret"></a>

```typescript
public readonly secret: GoogleCloudRunV2InstanceVolumesSecretOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference">GoogleCloudRunV2InstanceVolumesSecretOutputReference</a>

---

##### `cloudSqlInstanceInput`<sup>Optional</sup> <a name="cloudSqlInstanceInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```typescript
public readonly cloudSqlInstanceInput: GoogleCloudRunV2InstanceVolumesCloudSqlInstance;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

---

##### `emptyDirInput`<sup>Optional</sup> <a name="emptyDirInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDirInput"></a>

```typescript
public readonly emptyDirInput: GoogleCloudRunV2InstanceVolumesEmptyDir;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

---

##### `gcsInput`<sup>Optional</sup> <a name="gcsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcsInput"></a>

```typescript
public readonly gcsInput: GoogleCloudRunV2InstanceVolumesGcs;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nfsInput`<sup>Optional</sup> <a name="nfsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfsInput"></a>

```typescript
public readonly nfsInput: GoogleCloudRunV2InstanceVolumesNfs;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: GoogleCloudRunV2InstanceVolumesSecret;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceVolumes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>

---


### GoogleCloudRunV2InstanceVolumesSecretItemsList <a name="GoogleCloudRunV2InstanceVolumesSecretItemsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceVolumesSecretItems[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>[]

---


### GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference <a name="GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.modeInput">modeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.mode">mode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2InstanceVolumesSecretItems;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>

---


### GoogleCloudRunV2InstanceVolumesSecretOutputReference <a name="GoogleCloudRunV2InstanceVolumesSecretOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Instance } from '@cdktn/provider-google-beta'

new googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.putItems">putItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetDefaultMode">resetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.putItems"></a>

```typescript
public putItems(value: IResolvable | GoogleCloudRunV2InstanceVolumesSecretItems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>[]

---

##### `resetDefaultMode` <a name="resetDefaultMode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetDefaultMode"></a>

```typescript
public resetDefaultMode(): void
```

##### `resetItems` <a name="resetItems" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetItems"></a>

```typescript
public resetItems(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.items">items</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList">GoogleCloudRunV2InstanceVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultModeInput">defaultModeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.itemsInput">itemsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultMode">defaultMode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.items"></a>

```typescript
public readonly items: GoogleCloudRunV2InstanceVolumesSecretItemsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList">GoogleCloudRunV2InstanceVolumesSecretItemsList</a>

---

##### `defaultModeInput`<sup>Optional</sup> <a name="defaultModeInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultModeInput"></a>

```typescript
public readonly defaultModeInput: number;
```

- *Type:* number

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: IResolvable | GoogleCloudRunV2InstanceVolumesSecretItems[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>[]

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `defaultMode`<sup>Required</sup> <a name="defaultMode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultMode"></a>

```typescript
public readonly defaultMode: number;
```

- *Type:* number

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2InstanceVolumesSecret;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

---



