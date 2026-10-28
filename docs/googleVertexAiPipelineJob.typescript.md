# `googleVertexAiPipelineJob` Submodule <a name="`googleVertexAiPipelineJob` Submodule" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiPipelineJob <a name="GoogleVertexAiPipelineJob" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job google_vertex_ai_pipeline_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJob(scope: Construct, id: string, config?: GoogleVertexAiPipelineJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig">GoogleVertexAiPipelineJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig">GoogleVertexAiPipelineJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putPscInterfaceConfig">putPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putRuntimeConfig">putRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPipelineJobId">resetPipelineJobId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPipelineSpec">resetPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPreflightValidations">resetPreflightValidations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPscInterfaceConfig">resetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetReservedIpRanges">resetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetRuntimeConfig">resetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetTemplateUri">resetTemplateUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putEncryptionSpec"></a>

```typescript
public putEncryptionSpec(value: GoogleVertexAiPipelineJobEncryptionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a>

---

##### `putPscInterfaceConfig` <a name="putPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putPscInterfaceConfig"></a>

```typescript
public putPscInterfaceConfig(value: GoogleVertexAiPipelineJobPscInterfaceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a>

---

##### `putRuntimeConfig` <a name="putRuntimeConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putRuntimeConfig"></a>

```typescript
public putRuntimeConfig(value: GoogleVertexAiPipelineJobRuntimeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVertexAiPipelineJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetEncryptionSpec"></a>

```typescript
public resetEncryptionSpec(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetPipelineJobId` <a name="resetPipelineJobId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPipelineJobId"></a>

```typescript
public resetPipelineJobId(): void
```

##### `resetPipelineSpec` <a name="resetPipelineSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPipelineSpec"></a>

```typescript
public resetPipelineSpec(): void
```

##### `resetPreflightValidations` <a name="resetPreflightValidations" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPreflightValidations"></a>

```typescript
public resetPreflightValidations(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPscInterfaceConfig` <a name="resetPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPscInterfaceConfig"></a>

```typescript
public resetPscInterfaceConfig(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetReservedIpRanges` <a name="resetReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetReservedIpRanges"></a>

```typescript
public resetReservedIpRanges(): void
```

##### `resetRuntimeConfig` <a name="resetRuntimeConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetRuntimeConfig"></a>

```typescript
public resetRuntimeConfig(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetTemplateUri` <a name="resetTemplateUri" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetTemplateUri"></a>

```typescript
public resetTemplateUri(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiPipelineJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isConstruct"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformElement"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformResource"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleVertexAiPipelineJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiPipelineJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiPipelineJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiPipelineJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference">GoogleVertexAiPipelineJobEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList">GoogleVertexAiPipelineJobErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.jobDetail">jobDetail</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList">GoogleVertexAiPipelineJobJobDetailList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pscInterfaceConfig">pscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference">GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference">GoogleVertexAiPipelineJobRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.scheduleName">scheduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateMetadata">templateMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList">GoogleVertexAiPipelineJobTemplateMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference">GoogleVertexAiPipelineJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineJobIdInput">pipelineJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineSpecInput">pipelineSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.preflightValidationsInput">preflightValidationsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pscInterfaceConfigInput">pscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.reservedIpRangesInput">reservedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.runtimeConfigInput">runtimeConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateUriInput">templateUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineJobId">pipelineJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineSpec">pipelineSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.preflightValidations">preflightValidations</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.reservedIpRanges">reservedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateUri">templateUri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: GoogleVertexAiPipelineJobEncryptionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference">GoogleVertexAiPipelineJobEncryptionSpecOutputReference</a>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.error"></a>

```typescript
public readonly error: GoogleVertexAiPipelineJobErrorList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList">GoogleVertexAiPipelineJobErrorList</a>

---

##### `jobDetail`<sup>Required</sup> <a name="jobDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.jobDetail"></a>

```typescript
public readonly jobDetail: GoogleVertexAiPipelineJobJobDetailList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList">GoogleVertexAiPipelineJobJobDetailList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pscInterfaceConfig`<sup>Required</sup> <a name="pscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pscInterfaceConfig"></a>

```typescript
public readonly pscInterfaceConfig: GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference">GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference</a>

---

##### `runtimeConfig`<sup>Required</sup> <a name="runtimeConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.runtimeConfig"></a>

```typescript
public readonly runtimeConfig: GoogleVertexAiPipelineJobRuntimeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference">GoogleVertexAiPipelineJobRuntimeConfigOutputReference</a>

---

##### `scheduleName`<sup>Required</sup> <a name="scheduleName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.scheduleName"></a>

```typescript
public readonly scheduleName: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `templateMetadata`<sup>Required</sup> <a name="templateMetadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateMetadata"></a>

```typescript
public readonly templateMetadata: GoogleVertexAiPipelineJobTemplateMetadataList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList">GoogleVertexAiPipelineJobTemplateMetadataList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiPipelineJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference">GoogleVertexAiPipelineJobTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.encryptionSpecInput"></a>

```typescript
public readonly encryptionSpecInput: GoogleVertexAiPipelineJobEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `pipelineJobIdInput`<sup>Optional</sup> <a name="pipelineJobIdInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineJobIdInput"></a>

```typescript
public readonly pipelineJobIdInput: string;
```

- *Type:* string

---

##### `pipelineSpecInput`<sup>Optional</sup> <a name="pipelineSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineSpecInput"></a>

```typescript
public readonly pipelineSpecInput: string;
```

- *Type:* string

---

##### `preflightValidationsInput`<sup>Optional</sup> <a name="preflightValidationsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.preflightValidationsInput"></a>

```typescript
public readonly preflightValidationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pscInterfaceConfigInput`<sup>Optional</sup> <a name="pscInterfaceConfigInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pscInterfaceConfigInput"></a>

```typescript
public readonly pscInterfaceConfigInput: GoogleVertexAiPipelineJobPscInterfaceConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `reservedIpRangesInput`<sup>Optional</sup> <a name="reservedIpRangesInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.reservedIpRangesInput"></a>

```typescript
public readonly reservedIpRangesInput: string[];
```

- *Type:* string[]

---

##### `runtimeConfigInput`<sup>Optional</sup> <a name="runtimeConfigInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.runtimeConfigInput"></a>

```typescript
public readonly runtimeConfigInput: GoogleVertexAiPipelineJobRuntimeConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `templateUriInput`<sup>Optional</sup> <a name="templateUriInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateUriInput"></a>

```typescript
public readonly templateUriInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVertexAiPipelineJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `pipelineJobId`<sup>Required</sup> <a name="pipelineJobId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineJobId"></a>

```typescript
public readonly pipelineJobId: string;
```

- *Type:* string

---

##### `pipelineSpec`<sup>Required</sup> <a name="pipelineSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineSpec"></a>

```typescript
public readonly pipelineSpec: string;
```

- *Type:* string

---

##### `preflightValidations`<sup>Required</sup> <a name="preflightValidations" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.preflightValidations"></a>

```typescript
public readonly preflightValidations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `reservedIpRanges`<sup>Required</sup> <a name="reservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.reservedIpRanges"></a>

```typescript
public readonly reservedIpRanges: string[];
```

- *Type:* string[]

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `templateUri`<sup>Required</sup> <a name="templateUri" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateUri"></a>

```typescript
public readonly templateUri: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiPipelineJobConfig <a name="GoogleVertexAiPipelineJobConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

const googleVertexAiPipelineJobConfig: googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_pipeline_job.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the Pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#id GoogleVertexAiPipelineJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels with user-defined metadata to organize PipelineJob. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.network">network</a></code> | <code>string</code> | The full name of the Compute Engine network to which the Pipeline Job's workload should be peered. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pipelineJobId">pipelineJobId</a></code> | <code>string</code> | The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pipelineSpec">pipelineSpec</a></code> | <code>string</code> | The spec of the pipeline. This is a JSON object that describes the pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.preflightValidations">preflightValidations</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to do component level validations before job creation. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#project GoogleVertexAiPipelineJob#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pscInterfaceConfig">pscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.region">region</a></code> | <code>string</code> | The region of the pipeline job. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.reservedIpRanges">reservedIpRanges</a></code> | <code>string[]</code> | A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The service account that the pipeline workload runs as. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.templateUri">templateUri</a></code> | <code>string</code> | A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_pipeline_job.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#deletion_policy GoogleVertexAiPipelineJob#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the Pipeline.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#display_name GoogleVertexAiPipelineJob#display_name}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: GoogleVertexAiPipelineJobEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#encryption_spec GoogleVertexAiPipelineJob#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#id GoogleVertexAiPipelineJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels with user-defined metadata to organize PipelineJob.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#labels GoogleVertexAiPipelineJob#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The full name of the Compute Engine network to which the Pipeline Job's workload should be peered.

For example, 'projects/12345/global/networks/myVPC'. Format is of the form 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is a network name. Private services access must already be configured for the network. Pipeline job will apply the network configuration to the Google Cloud resources being launched, if applied, such as Vertex AI Training or Dataflow job. If left unspecified, the workload is not peered with any network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#network GoogleVertexAiPipelineJob#network}

---

##### `pipelineJobId`<sup>Optional</sup> <a name="pipelineJobId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pipelineJobId"></a>

```typescript
public readonly pipelineJobId: string;
```

- *Type:* string

The ID to use for the PipelineJob, which will become the final component of the PipelineJob name.

If not provided, an ID will be automatically generated.
This value should be less than 128 characters, and valid characters are '/[a-z][0-9]-/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#pipeline_job_id GoogleVertexAiPipelineJob#pipeline_job_id}

---

##### `pipelineSpec`<sup>Optional</sup> <a name="pipelineSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pipelineSpec"></a>

```typescript
public readonly pipelineSpec: string;
```

- *Type:* string

The spec of the pipeline. This is a JSON object that describes the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#pipeline_spec GoogleVertexAiPipelineJob#pipeline_spec}

---

##### `preflightValidations`<sup>Optional</sup> <a name="preflightValidations" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.preflightValidations"></a>

```typescript
public readonly preflightValidations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to do component level validations before job creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#preflight_validations GoogleVertexAiPipelineJob#preflight_validations}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#project GoogleVertexAiPipelineJob#project}.

---

##### `pscInterfaceConfig`<sup>Optional</sup> <a name="pscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pscInterfaceConfig"></a>

```typescript
public readonly pscInterfaceConfig: GoogleVertexAiPipelineJobPscInterfaceConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#psc_interface_config GoogleVertexAiPipelineJob#psc_interface_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the pipeline job. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#region GoogleVertexAiPipelineJob#region}

---

##### `reservedIpRanges`<sup>Optional</sup> <a name="reservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.reservedIpRanges"></a>

```typescript
public readonly reservedIpRanges: string[];
```

- *Type:* string[]

A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload.

If set, we will deploy the Pipeline Job's workload within the provided ip ranges. Otherwise, the job will be deployed to any ip ranges under the provided VPC network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#reserved_ip_ranges GoogleVertexAiPipelineJob#reserved_ip_ranges}

---

##### `runtimeConfig`<sup>Optional</sup> <a name="runtimeConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.runtimeConfig"></a>

```typescript
public readonly runtimeConfig: GoogleVertexAiPipelineJobRuntimeConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#runtime_config GoogleVertexAiPipelineJob#runtime_config}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The service account that the pipeline workload runs as.

If not specified, the Compute Engine default service account in the project will be used. Users starting the pipeline must have the iam.serviceAccounts.actAs permission on this service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#service_account GoogleVertexAiPipelineJob#service_account}

---

##### `templateUri`<sup>Optional</sup> <a name="templateUri" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.templateUri"></a>

```typescript
public readonly templateUri: string;
```

- *Type:* string

A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#template_uri GoogleVertexAiPipelineJob#template_uri}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiPipelineJobTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#timeouts GoogleVertexAiPipelineJob#timeouts}

---

### GoogleVertexAiPipelineJobEncryptionSpec <a name="GoogleVertexAiPipelineJobEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

const googleVertexAiPipelineJobEncryptionSpec: googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.

Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#kms_key_name GoogleVertexAiPipelineJob#kms_key_name}

---

### GoogleVertexAiPipelineJobError <a name="GoogleVertexAiPipelineJobError" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

const googleVertexAiPipelineJobError: googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError = { ... }
```


### GoogleVertexAiPipelineJobJobDetail <a name="GoogleVertexAiPipelineJobJobDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

const googleVertexAiPipelineJobJobDetail: googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail = { ... }
```


### GoogleVertexAiPipelineJobJobDetailPipelineContext <a name="GoogleVertexAiPipelineJobJobDetailPipelineContext" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

const googleVertexAiPipelineJobJobDetailPipelineContext: googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext = { ... }
```


### GoogleVertexAiPipelineJobJobDetailPipelineRunContext <a name="GoogleVertexAiPipelineJobJobDetailPipelineRunContext" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

const googleVertexAiPipelineJobJobDetailPipelineRunContext: googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext = { ... }
```


### GoogleVertexAiPipelineJobJobDetailTaskDetails <a name="GoogleVertexAiPipelineJobJobDetailTaskDetails" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

const googleVertexAiPipelineJobJobDetailTaskDetails: googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails = { ... }
```


### GoogleVertexAiPipelineJobJobDetailTaskDetailsError <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsError" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

const googleVertexAiPipelineJobJobDetailTaskDetailsError: googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError = { ... }
```


### GoogleVertexAiPipelineJobPscInterfaceConfig <a name="GoogleVertexAiPipelineJobPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

const googleVertexAiPipelineJobPscInterfaceConfig: googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.property.dnsPeeringConfigs">dnsPeeringConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | The name of the Compute Engine network attachment to attach to the resource within the region and user project. |

---

##### `dnsPeeringConfigs`<sup>Optional</sup> <a name="dnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.property.dnsPeeringConfigs"></a>

```typescript
public readonly dnsPeeringConfigs: IResolvable | GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#dns_peering_configs GoogleVertexAiPipelineJob#dns_peering_configs}

---

##### `networkAttachment`<sup>Optional</sup> <a name="networkAttachment" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

The name of the Compute Engine network attachment to attach to the resource within the region and user project.

To specify this field, you must have already created a network attachment. This field is only used for resources using PSC-I.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#network_attachment GoogleVertexAiPipelineJob#network_attachment}

---

### GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs <a name="GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

const googleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs: googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.domain">domain</a></code> | <code>string</code> | The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">targetNetwork</a></code> | <code>string</code> | The VPC network name in the targetProject where the DNS zone specified by domain is visible. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetProject">targetProject</a></code> | <code>string</code> | The project ID hosting the Cloud DNS managed zone that contains the above domain. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#domain GoogleVertexAiPipelineJob#domain}

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```typescript
public readonly targetNetwork: string;
```

- *Type:* string

The VPC network name in the targetProject where the DNS zone specified by domain is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#target_network GoogleVertexAiPipelineJob#target_network}

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```typescript
public readonly targetProject: string;
```

- *Type:* string

The project ID hosting the Cloud DNS managed zone that contains the above domain.

The Vertex AI Service Agent must be granted the dns.peer role on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#target_project GoogleVertexAiPipelineJob#target_project}

---

### GoogleVertexAiPipelineJobRuntimeConfig <a name="GoogleVertexAiPipelineJobRuntimeConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

const googleVertexAiPipelineJobRuntimeConfig: googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.gcsOutputDirectory">gcsOutputDirectory</a></code> | <code>string</code> | A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.defaultRuntime">defaultRuntime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a></code> | default_runtime block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.failurePolicy">failurePolicy</a></code> | <code>string</code> | Represents the failure policy of a pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.inputArtifacts">inputArtifacts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]</code> | input_artifacts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.parameterValues">parameterValues</a></code> | <code>{[ key: string ]: string}</code> | The runtime parameters of the PipelineJob. |

---

##### `gcsOutputDirectory`<sup>Required</sup> <a name="gcsOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.gcsOutputDirectory"></a>

```typescript
public readonly gcsOutputDirectory: string;
```

- *Type:* string

A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline.

It is used by the system to generate the paths of output artifacts. The artifact paths are generated with a sub-directory pattern '{job_id}/{task_id}/{output_key}' under the specified output directory. The service account specified in this pipeline must have the 'storage.objects.get' and 'storage.objects.create' permissions for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#gcs_output_directory GoogleVertexAiPipelineJob#gcs_output_directory}

---

##### `defaultRuntime`<sup>Optional</sup> <a name="defaultRuntime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.defaultRuntime"></a>

```typescript
public readonly defaultRuntime: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a>

default_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#default_runtime GoogleVertexAiPipelineJob#default_runtime}

---

##### `failurePolicy`<sup>Optional</sup> <a name="failurePolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.failurePolicy"></a>

```typescript
public readonly failurePolicy: string;
```

- *Type:* string

Represents the failure policy of a pipeline.

Currently, the default of a pipeline is that the pipeline will continue to run until no more tasks can be executed, also known as 'PIPELINE_FAILURE_POLICY_FAIL_SLOW'. However, if a pipeline is set to 'PIPELINE_FAILURE_POLICY_FAIL_FAST', it will stop scheduling any new tasks as soon as the pipeline fails.
Possible values are: 'PIPELINE_FAILURE_POLICY_UNSPECIFIED', 'PIPELINE_FAILURE_POLICY_FAIL_SLOW', 'PIPELINE_FAILURE_POLICY_FAIL_FAST'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#failure_policy GoogleVertexAiPipelineJob#failure_policy}

---

##### `inputArtifacts`<sup>Optional</sup> <a name="inputArtifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: IResolvable | GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]

input_artifacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#input_artifacts GoogleVertexAiPipelineJob#input_artifacts}

---

##### `parameterValues`<sup>Optional</sup> <a name="parameterValues" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.parameterValues"></a>

```typescript
public readonly parameterValues: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The runtime parameters of the PipelineJob.

The parameters will be passed into PipelineJob.pipeline_spec to replace the placeholders at runtime. This field is used by pipelines built using 'PipelineJob.pipeline_spec.schema_version' 2.1.0, such as pipelines built using Kubeflow Pipelines SDK 1.9 or higher and the v2 DSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#parameter_values GoogleVertexAiPipelineJob#parameter_values}

---

### GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime <a name="GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

const googleVertexAiPipelineJobRuntimeConfigDefaultRuntime: googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime.property.persistentResourceRuntimeDetail">persistentResourceRuntimeDetail</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a></code> | persistent_resource_runtime_detail block. |

---

##### `persistentResourceRuntimeDetail`<sup>Optional</sup> <a name="persistentResourceRuntimeDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime.property.persistentResourceRuntimeDetail"></a>

```typescript
public readonly persistentResourceRuntimeDetail: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a>

persistent_resource_runtime_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#persistent_resource_runtime_detail GoogleVertexAiPipelineJob#persistent_resource_runtime_detail}

---

### GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail <a name="GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

const googleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail: googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.persistentResourceName">persistentResourceName</a></code> | <code>string</code> | PersistentResource name, format: 'projects/{project}/locations/{location}/persistentResources/{persistent_resource}'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.taskResourceUnavailableTimeoutBehavior">taskResourceUnavailableTimeoutBehavior</a></code> | <code>string</code> | Sets the behavior when a task has reached the defined wait duration while waiting for task resources to become available in the specified persistent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.taskResourceUnavailableWaitTimeMs">taskResourceUnavailableWaitTimeMs</a></code> | <code>string</code> | The maxWaitTime for the task if the persistent resource is unavailable. |

---

##### `persistentResourceName`<sup>Optional</sup> <a name="persistentResourceName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.persistentResourceName"></a>

```typescript
public readonly persistentResourceName: string;
```

- *Type:* string

PersistentResource name, format: 'projects/{project}/locations/{location}/persistentResources/{persistent_resource}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#persistent_resource_name GoogleVertexAiPipelineJob#persistent_resource_name}

---

##### `taskResourceUnavailableTimeoutBehavior`<sup>Optional</sup> <a name="taskResourceUnavailableTimeoutBehavior" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.taskResourceUnavailableTimeoutBehavior"></a>

```typescript
public readonly taskResourceUnavailableTimeoutBehavior: string;
```

- *Type:* string

Sets the behavior when a task has reached the defined wait duration while waiting for task resources to become available in the specified persistent resource.

Possible values are: 'TASK_RESOURCE_UNAVAILABLE_TIMEOUT_BEHAVIOR_UNSPECIFIED', 'FAIL', 'FALL_BACK_TO_ON_DEMAND'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#task_resource_unavailable_timeout_behavior GoogleVertexAiPipelineJob#task_resource_unavailable_timeout_behavior}

---

##### `taskResourceUnavailableWaitTimeMs`<sup>Optional</sup> <a name="taskResourceUnavailableWaitTimeMs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.taskResourceUnavailableWaitTimeMs"></a>

```typescript
public readonly taskResourceUnavailableWaitTimeMs: string;
```

- *Type:* string

The maxWaitTime for the task if the persistent resource is unavailable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#task_resource_unavailable_wait_time_ms GoogleVertexAiPipelineJob#task_resource_unavailable_wait_time_ms}

---

### GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts <a name="GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

const googleVertexAiPipelineJobRuntimeConfigInputArtifacts: googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactId">artifactId</a></code> | <code>string</code> | Artifact resource id from MLMD. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactKey">artifactKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#artifact_key GoogleVertexAiPipelineJob#artifact_key}. |

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

Artifact resource id from MLMD.

Which is the last portion of an artifact resource name: 'projects/{project}/locations/{location}/metadataStores/default/artifacts/{artifact_id}'. The artifact must be within the same project, location and default metadatastore as the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#artifact_id GoogleVertexAiPipelineJob#artifact_id}

---

##### `artifactKey`<sup>Required</sup> <a name="artifactKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactKey"></a>

```typescript
public readonly artifactKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#artifact_key GoogleVertexAiPipelineJob#artifact_key}.

---

### GoogleVertexAiPipelineJobTemplateMetadata <a name="GoogleVertexAiPipelineJobTemplateMetadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

const googleVertexAiPipelineJobTemplateMetadata: googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata = { ... }
```


### GoogleVertexAiPipelineJobTimeouts <a name="GoogleVertexAiPipelineJobTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

const googleVertexAiPipelineJobTimeouts: googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#create GoogleVertexAiPipelineJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#delete GoogleVertexAiPipelineJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#update GoogleVertexAiPipelineJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#create GoogleVertexAiPipelineJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#delete GoogleVertexAiPipelineJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#update GoogleVertexAiPipelineJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiPipelineJobEncryptionSpecOutputReference <a name="GoogleVertexAiPipelineJobEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiPipelineJobEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a>

---


### GoogleVertexAiPipelineJobErrorList <a name="GoogleVertexAiPipelineJobErrorList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.get"></a>

```typescript
public get(index: number): GoogleVertexAiPipelineJobErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiPipelineJobErrorOutputReference <a name="GoogleVertexAiPipelineJobErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.details">details</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError">GoogleVertexAiPipelineJobError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.details"></a>

```typescript
public readonly details: StringMapList;
```

- *Type:* cdktn.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiPipelineJobError;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError">GoogleVertexAiPipelineJobError</a>

---


### GoogleVertexAiPipelineJobJobDetailList <a name="GoogleVertexAiPipelineJobJobDetailList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.get"></a>

```typescript
public get(index: number): GoogleVertexAiPipelineJobJobDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiPipelineJobJobDetailOutputReference <a name="GoogleVertexAiPipelineJobJobDetailOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.pipelineContext">pipelineContext</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList">GoogleVertexAiPipelineJobJobDetailPipelineContextList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.pipelineRunContext">pipelineRunContext</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList">GoogleVertexAiPipelineJobJobDetailPipelineRunContextList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.taskDetails">taskDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList">GoogleVertexAiPipelineJobJobDetailTaskDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail">GoogleVertexAiPipelineJobJobDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pipelineContext`<sup>Required</sup> <a name="pipelineContext" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.pipelineContext"></a>

```typescript
public readonly pipelineContext: GoogleVertexAiPipelineJobJobDetailPipelineContextList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList">GoogleVertexAiPipelineJobJobDetailPipelineContextList</a>

---

##### `pipelineRunContext`<sup>Required</sup> <a name="pipelineRunContext" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.pipelineRunContext"></a>

```typescript
public readonly pipelineRunContext: GoogleVertexAiPipelineJobJobDetailPipelineRunContextList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList">GoogleVertexAiPipelineJobJobDetailPipelineRunContextList</a>

---

##### `taskDetails`<sup>Required</sup> <a name="taskDetails" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.taskDetails"></a>

```typescript
public readonly taskDetails: GoogleVertexAiPipelineJobJobDetailTaskDetailsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList">GoogleVertexAiPipelineJobJobDetailTaskDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiPipelineJobJobDetail;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail">GoogleVertexAiPipelineJobJobDetail</a>

---


### GoogleVertexAiPipelineJobJobDetailPipelineContextList <a name="GoogleVertexAiPipelineJobJobDetailPipelineContextList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.get"></a>

```typescript
public get(index: number): GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference <a name="GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.parentContexts">parentContexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaTitle">schemaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaVersion">schemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext">GoogleVertexAiPipelineJobJobDetailPipelineContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentContexts`<sup>Required</sup> <a name="parentContexts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.parentContexts"></a>

```typescript
public readonly parentContexts: string[];
```

- *Type:* string[]

---

##### `schemaTitle`<sup>Required</sup> <a name="schemaTitle" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaTitle"></a>

```typescript
public readonly schemaTitle: string;
```

- *Type:* string

---

##### `schemaVersion`<sup>Required</sup> <a name="schemaVersion" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaVersion"></a>

```typescript
public readonly schemaVersion: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiPipelineJobJobDetailPipelineContext;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext">GoogleVertexAiPipelineJobJobDetailPipelineContext</a>

---


### GoogleVertexAiPipelineJobJobDetailPipelineRunContextList <a name="GoogleVertexAiPipelineJobJobDetailPipelineRunContextList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.get"></a>

```typescript
public get(index: number): GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference <a name="GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.parentContexts">parentContexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaTitle">schemaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaVersion">schemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext">GoogleVertexAiPipelineJobJobDetailPipelineRunContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentContexts`<sup>Required</sup> <a name="parentContexts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.parentContexts"></a>

```typescript
public readonly parentContexts: string[];
```

- *Type:* string[]

---

##### `schemaTitle`<sup>Required</sup> <a name="schemaTitle" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaTitle"></a>

```typescript
public readonly schemaTitle: string;
```

- *Type:* string

---

##### `schemaVersion`<sup>Required</sup> <a name="schemaVersion" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaVersion"></a>

```typescript
public readonly schemaVersion: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiPipelineJobJobDetailPipelineRunContext;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext">GoogleVertexAiPipelineJobJobDetailPipelineRunContext</a>

---


### GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.get"></a>

```typescript
public get(index: number): GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError">GoogleVertexAiPipelineJobJobDetailTaskDetailsError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiPipelineJobJobDetailTaskDetailsError;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError">GoogleVertexAiPipelineJobJobDetailTaskDetailsError</a>

---


### GoogleVertexAiPipelineJobJobDetailTaskDetailsList <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.get"></a>

```typescript
public get(index: number): GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList">GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.parentTaskId">parentTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskId">taskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskName">taskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskUniqueName">taskUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails">GoogleVertexAiPipelineJobJobDetailTaskDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.error"></a>

```typescript
public readonly error: GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList">GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList</a>

---

##### `parentTaskId`<sup>Required</sup> <a name="parentTaskId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.parentTaskId"></a>

```typescript
public readonly parentTaskId: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

---

##### `taskName`<sup>Required</sup> <a name="taskName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskName"></a>

```typescript
public readonly taskName: string;
```

- *Type:* string

---

##### `taskUniqueName`<sup>Required</sup> <a name="taskUniqueName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskUniqueName"></a>

```typescript
public readonly taskUniqueName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiPipelineJobJobDetailTaskDetails;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails">GoogleVertexAiPipelineJobJobDetailTaskDetails</a>

---


### GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList <a name="GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get"></a>

```typescript
public get(index: number): GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]

---


### GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference <a name="GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">targetNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">targetProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">targetNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">targetProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `targetNetworkInput`<sup>Optional</sup> <a name="targetNetworkInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```typescript
public readonly targetNetworkInput: string;
```

- *Type:* string

---

##### `targetProjectInput`<sup>Optional</sup> <a name="targetProjectInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```typescript
public readonly targetProjectInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```typescript
public readonly targetNetwork: string;
```

- *Type:* string

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```typescript
public readonly targetProject: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>

---


### GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference <a name="GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs">putDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resetDnsPeeringConfigs">resetDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resetNetworkAttachment">resetNetworkAttachment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsPeeringConfigs` <a name="putDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```typescript
public putDnsPeeringConfigs(value: IResolvable | GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]

---

##### `resetDnsPeeringConfigs` <a name="resetDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```typescript
public resetDnsPeeringConfigs(): void
```

##### `resetNetworkAttachment` <a name="resetNetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```typescript
public resetNetworkAttachment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigs">dnsPeeringConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">dnsPeeringConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsPeeringConfigs`<sup>Required</sup> <a name="dnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```typescript
public readonly dnsPeeringConfigs: GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `dnsPeeringConfigsInput`<sup>Optional</sup> <a name="dnsPeeringConfigsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```typescript
public readonly dnsPeeringConfigsInput: IResolvable | GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```typescript
public readonly networkAttachmentInput: string;
```

- *Type:* string

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiPipelineJobPscInterfaceConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a>

---


### GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference <a name="GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.putPersistentResourceRuntimeDetail">putPersistentResourceRuntimeDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resetPersistentResourceRuntimeDetail">resetPersistentResourceRuntimeDetail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPersistentResourceRuntimeDetail` <a name="putPersistentResourceRuntimeDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.putPersistentResourceRuntimeDetail"></a>

```typescript
public putPersistentResourceRuntimeDetail(value: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.putPersistentResourceRuntimeDetail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a>

---

##### `resetPersistentResourceRuntimeDetail` <a name="resetPersistentResourceRuntimeDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resetPersistentResourceRuntimeDetail"></a>

```typescript
public resetPersistentResourceRuntimeDetail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.persistentResourceRuntimeDetail">persistentResourceRuntimeDetail</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.persistentResourceRuntimeDetailInput">persistentResourceRuntimeDetailInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `persistentResourceRuntimeDetail`<sup>Required</sup> <a name="persistentResourceRuntimeDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.persistentResourceRuntimeDetail"></a>

```typescript
public readonly persistentResourceRuntimeDetail: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference</a>

---

##### `persistentResourceRuntimeDetailInput`<sup>Optional</sup> <a name="persistentResourceRuntimeDetailInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.persistentResourceRuntimeDetailInput"></a>

```typescript
public readonly persistentResourceRuntimeDetailInput: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a>

---


### GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference <a name="GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetPersistentResourceName">resetPersistentResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetTaskResourceUnavailableTimeoutBehavior">resetTaskResourceUnavailableTimeoutBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetTaskResourceUnavailableWaitTimeMs">resetTaskResourceUnavailableWaitTimeMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPersistentResourceName` <a name="resetPersistentResourceName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetPersistentResourceName"></a>

```typescript
public resetPersistentResourceName(): void
```

##### `resetTaskResourceUnavailableTimeoutBehavior` <a name="resetTaskResourceUnavailableTimeoutBehavior" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetTaskResourceUnavailableTimeoutBehavior"></a>

```typescript
public resetTaskResourceUnavailableTimeoutBehavior(): void
```

##### `resetTaskResourceUnavailableWaitTimeMs` <a name="resetTaskResourceUnavailableWaitTimeMs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetTaskResourceUnavailableWaitTimeMs"></a>

```typescript
public resetTaskResourceUnavailableWaitTimeMs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.persistentResourceNameInput">persistentResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableTimeoutBehaviorInput">taskResourceUnavailableTimeoutBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableWaitTimeMsInput">taskResourceUnavailableWaitTimeMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.persistentResourceName">persistentResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableTimeoutBehavior">taskResourceUnavailableTimeoutBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableWaitTimeMs">taskResourceUnavailableWaitTimeMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `persistentResourceNameInput`<sup>Optional</sup> <a name="persistentResourceNameInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.persistentResourceNameInput"></a>

```typescript
public readonly persistentResourceNameInput: string;
```

- *Type:* string

---

##### `taskResourceUnavailableTimeoutBehaviorInput`<sup>Optional</sup> <a name="taskResourceUnavailableTimeoutBehaviorInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableTimeoutBehaviorInput"></a>

```typescript
public readonly taskResourceUnavailableTimeoutBehaviorInput: string;
```

- *Type:* string

---

##### `taskResourceUnavailableWaitTimeMsInput`<sup>Optional</sup> <a name="taskResourceUnavailableWaitTimeMsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableWaitTimeMsInput"></a>

```typescript
public readonly taskResourceUnavailableWaitTimeMsInput: string;
```

- *Type:* string

---

##### `persistentResourceName`<sup>Required</sup> <a name="persistentResourceName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.persistentResourceName"></a>

```typescript
public readonly persistentResourceName: string;
```

- *Type:* string

---

##### `taskResourceUnavailableTimeoutBehavior`<sup>Required</sup> <a name="taskResourceUnavailableTimeoutBehavior" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableTimeoutBehavior"></a>

```typescript
public readonly taskResourceUnavailableTimeoutBehavior: string;
```

- *Type:* string

---

##### `taskResourceUnavailableWaitTimeMs`<sup>Required</sup> <a name="taskResourceUnavailableWaitTimeMs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableWaitTimeMs"></a>

```typescript
public readonly taskResourceUnavailableWaitTimeMs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a>

---


### GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList <a name="GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.get"></a>

```typescript
public get(index: number): GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]

---


### GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference <a name="GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactIdInput">artifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKeyInput">artifactKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKey">artifactKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactIdInput`<sup>Optional</sup> <a name="artifactIdInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactIdInput"></a>

```typescript
public readonly artifactIdInput: string;
```

- *Type:* string

---

##### `artifactKeyInput`<sup>Optional</sup> <a name="artifactKeyInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKeyInput"></a>

```typescript
public readonly artifactKeyInput: string;
```

- *Type:* string

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `artifactKey`<sup>Required</sup> <a name="artifactKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKey"></a>

```typescript
public readonly artifactKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>

---


### GoogleVertexAiPipelineJobRuntimeConfigOutputReference <a name="GoogleVertexAiPipelineJobRuntimeConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putDefaultRuntime">putDefaultRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putInputArtifacts">putInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetDefaultRuntime">resetDefaultRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetFailurePolicy">resetFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetInputArtifacts">resetInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetParameterValues">resetParameterValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultRuntime` <a name="putDefaultRuntime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putDefaultRuntime"></a>

```typescript
public putDefaultRuntime(value: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putDefaultRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a>

---

##### `putInputArtifacts` <a name="putInputArtifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putInputArtifacts"></a>

```typescript
public putInputArtifacts(value: IResolvable | GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putInputArtifacts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]

---

##### `resetDefaultRuntime` <a name="resetDefaultRuntime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetDefaultRuntime"></a>

```typescript
public resetDefaultRuntime(): void
```

##### `resetFailurePolicy` <a name="resetFailurePolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetFailurePolicy"></a>

```typescript
public resetFailurePolicy(): void
```

##### `resetInputArtifacts` <a name="resetInputArtifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetInputArtifacts"></a>

```typescript
public resetInputArtifacts(): void
```

##### `resetParameterValues` <a name="resetParameterValues" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetParameterValues"></a>

```typescript
public resetParameterValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.defaultRuntime">defaultRuntime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifacts">inputArtifacts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList">GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.defaultRuntimeInput">defaultRuntimeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicyInput">failurePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectoryInput">gcsOutputDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifactsInput">inputArtifactsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValuesInput">parameterValuesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicy">failurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectory">gcsOutputDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValues">parameterValues</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultRuntime`<sup>Required</sup> <a name="defaultRuntime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.defaultRuntime"></a>

```typescript
public readonly defaultRuntime: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference</a>

---

##### `inputArtifacts`<sup>Required</sup> <a name="inputArtifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList">GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList</a>

---

##### `defaultRuntimeInput`<sup>Optional</sup> <a name="defaultRuntimeInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.defaultRuntimeInput"></a>

```typescript
public readonly defaultRuntimeInput: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a>

---

##### `failurePolicyInput`<sup>Optional</sup> <a name="failurePolicyInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicyInput"></a>

```typescript
public readonly failurePolicyInput: string;
```

- *Type:* string

---

##### `gcsOutputDirectoryInput`<sup>Optional</sup> <a name="gcsOutputDirectoryInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectoryInput"></a>

```typescript
public readonly gcsOutputDirectoryInput: string;
```

- *Type:* string

---

##### `inputArtifactsInput`<sup>Optional</sup> <a name="inputArtifactsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifactsInput"></a>

```typescript
public readonly inputArtifactsInput: IResolvable | GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]

---

##### `parameterValuesInput`<sup>Optional</sup> <a name="parameterValuesInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValuesInput"></a>

```typescript
public readonly parameterValuesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `failurePolicy`<sup>Required</sup> <a name="failurePolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicy"></a>

```typescript
public readonly failurePolicy: string;
```

- *Type:* string

---

##### `gcsOutputDirectory`<sup>Required</sup> <a name="gcsOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectory"></a>

```typescript
public readonly gcsOutputDirectory: string;
```

- *Type:* string

---

##### `parameterValues`<sup>Required</sup> <a name="parameterValues" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValues"></a>

```typescript
public readonly parameterValues: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiPipelineJobRuntimeConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a>

---


### GoogleVertexAiPipelineJobTemplateMetadataList <a name="GoogleVertexAiPipelineJobTemplateMetadataList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.get"></a>

```typescript
public get(index: number): GoogleVertexAiPipelineJobTemplateMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiPipelineJobTemplateMetadataOutputReference <a name="GoogleVertexAiPipelineJobTemplateMetadataOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata">GoogleVertexAiPipelineJobTemplateMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiPipelineJobTemplateMetadata;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata">GoogleVertexAiPipelineJobTemplateMetadata</a>

---


### GoogleVertexAiPipelineJobTimeoutsOutputReference <a name="GoogleVertexAiPipelineJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiPipelineJob } from '@cdktn/provider-google-beta'

new googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiPipelineJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a>

---



