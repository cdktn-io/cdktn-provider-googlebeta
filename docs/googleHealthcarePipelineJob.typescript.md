# `googleHealthcarePipelineJob` Submodule <a name="`googleHealthcarePipelineJob` Submodule" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleHealthcarePipelineJob <a name="GoogleHealthcarePipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job google_healthcare_pipeline_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

new googleHealthcarePipelineJob.GoogleHealthcarePipelineJob(scope: Construct, id: string, config: GoogleHealthcarePipelineJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig">GoogleHealthcarePipelineJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig">GoogleHealthcarePipelineJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putBackfillPipelineJob">putBackfillPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putMappingPipelineJob">putMappingPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putReconciliationPipelineJob">putReconciliationPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetBackfillPipelineJob">resetBackfillPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetDisableLineage">resetDisableLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetMappingPipelineJob">resetMappingPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetReconciliationPipelineJob">resetReconciliationPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackfillPipelineJob` <a name="putBackfillPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putBackfillPipelineJob"></a>

```typescript
public putBackfillPipelineJob(value: GoogleHealthcarePipelineJobBackfillPipelineJob): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putBackfillPipelineJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob">GoogleHealthcarePipelineJobBackfillPipelineJob</a>

---

##### `putMappingPipelineJob` <a name="putMappingPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putMappingPipelineJob"></a>

```typescript
public putMappingPipelineJob(value: GoogleHealthcarePipelineJobMappingPipelineJob): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putMappingPipelineJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob">GoogleHealthcarePipelineJobMappingPipelineJob</a>

---

##### `putReconciliationPipelineJob` <a name="putReconciliationPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putReconciliationPipelineJob"></a>

```typescript
public putReconciliationPipelineJob(value: GoogleHealthcarePipelineJobReconciliationPipelineJob): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putReconciliationPipelineJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob">GoogleHealthcarePipelineJobReconciliationPipelineJob</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleHealthcarePipelineJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts">GoogleHealthcarePipelineJobTimeouts</a>

---

##### `resetBackfillPipelineJob` <a name="resetBackfillPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetBackfillPipelineJob"></a>

```typescript
public resetBackfillPipelineJob(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisableLineage` <a name="resetDisableLineage" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetDisableLineage"></a>

```typescript
public resetDisableLineage(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMappingPipelineJob` <a name="resetMappingPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetMappingPipelineJob"></a>

```typescript
public resetMappingPipelineJob(): void
```

##### `resetReconciliationPipelineJob` <a name="resetReconciliationPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetReconciliationPipelineJob"></a>

```typescript
public resetReconciliationPipelineJob(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleHealthcarePipelineJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isConstruct"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isTerraformElement"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isTerraformResource"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.generateConfigForImport"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleHealthcarePipelineJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleHealthcarePipelineJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleHealthcarePipelineJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleHealthcarePipelineJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.backfillPipelineJob">backfillPipelineJob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference">GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.mappingPipelineJob">mappingPipelineJob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference">GoogleHealthcarePipelineJobMappingPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.reconciliationPipelineJob">reconciliationPipelineJob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference">GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference">GoogleHealthcarePipelineJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.backfillPipelineJobInput">backfillPipelineJobInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob">GoogleHealthcarePipelineJobBackfillPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.disableLineageInput">disableLineageInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.mappingPipelineJobInput">mappingPipelineJobInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob">GoogleHealthcarePipelineJobMappingPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.reconciliationPipelineJobInput">reconciliationPipelineJobInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob">GoogleHealthcarePipelineJobReconciliationPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts">GoogleHealthcarePipelineJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.disableLineage">disableLineage</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backfillPipelineJob`<sup>Required</sup> <a name="backfillPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.backfillPipelineJob"></a>

```typescript
public readonly backfillPipelineJob: GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference">GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `mappingPipelineJob`<sup>Required</sup> <a name="mappingPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.mappingPipelineJob"></a>

```typescript
public readonly mappingPipelineJob: GoogleHealthcarePipelineJobMappingPipelineJobOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference">GoogleHealthcarePipelineJobMappingPipelineJobOutputReference</a>

---

##### `reconciliationPipelineJob`<sup>Required</sup> <a name="reconciliationPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.reconciliationPipelineJob"></a>

```typescript
public readonly reconciliationPipelineJob: GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference">GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleHealthcarePipelineJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference">GoogleHealthcarePipelineJobTimeoutsOutputReference</a>

---

##### `backfillPipelineJobInput`<sup>Optional</sup> <a name="backfillPipelineJobInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.backfillPipelineJobInput"></a>

```typescript
public readonly backfillPipelineJobInput: GoogleHealthcarePipelineJobBackfillPipelineJob;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob">GoogleHealthcarePipelineJobBackfillPipelineJob</a>

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `disableLineageInput`<sup>Optional</sup> <a name="disableLineageInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.disableLineageInput"></a>

```typescript
public readonly disableLineageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mappingPipelineJobInput`<sup>Optional</sup> <a name="mappingPipelineJobInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.mappingPipelineJobInput"></a>

```typescript
public readonly mappingPipelineJobInput: GoogleHealthcarePipelineJobMappingPipelineJob;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob">GoogleHealthcarePipelineJobMappingPipelineJob</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `reconciliationPipelineJobInput`<sup>Optional</sup> <a name="reconciliationPipelineJobInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.reconciliationPipelineJobInput"></a>

```typescript
public readonly reconciliationPipelineJobInput: GoogleHealthcarePipelineJobReconciliationPipelineJob;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob">GoogleHealthcarePipelineJobReconciliationPipelineJob</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleHealthcarePipelineJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts">GoogleHealthcarePipelineJobTimeouts</a>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `disableLineage`<sup>Required</sup> <a name="disableLineage" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.disableLineage"></a>

```typescript
public readonly disableLineage: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleHealthcarePipelineJobBackfillPipelineJob <a name="GoogleHealthcarePipelineJobBackfillPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

const googleHealthcarePipelineJobBackfillPipelineJob: googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob.property.mappingPipelineJob">mappingPipelineJob</a></code> | <code>string</code> | Specifies the mapping pipeline job to backfill, the name format should follow: projects/{projectId}/locations/{locationId}/datasets/{datasetId}/pipelineJobs/{pipelineJobId}. |

---

##### `mappingPipelineJob`<sup>Optional</sup> <a name="mappingPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob.property.mappingPipelineJob"></a>

```typescript
public readonly mappingPipelineJob: string;
```

- *Type:* string

Specifies the mapping pipeline job to backfill, the name format should follow: projects/{projectId}/locations/{locationId}/datasets/{datasetId}/pipelineJobs/{pipelineJobId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#mapping_pipeline_job GoogleHealthcarePipelineJob#mapping_pipeline_job}

---

### GoogleHealthcarePipelineJobConfig <a name="GoogleHealthcarePipelineJobConfig" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

const googleHealthcarePipelineJobConfig: googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.dataset">dataset</a></code> | <code>string</code> | Healthcare Dataset under which the Pipeline Job is to run. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.location">location</a></code> | <code>string</code> | Location where the Pipeline Job is to run. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the pipeline job. This field is user-assigned. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.backfillPipelineJob">backfillPipelineJob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob">GoogleHealthcarePipelineJobBackfillPipelineJob</a></code> | backfill_pipeline_job block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.disableLineage">disableLineage</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, disables writing lineage for the pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#id GoogleHealthcarePipelineJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-supplied key-value pairs used to organize Pipeline Jobs. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.mappingPipelineJob">mappingPipelineJob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob">GoogleHealthcarePipelineJobMappingPipelineJob</a></code> | mapping_pipeline_job block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.reconciliationPipelineJob">reconciliationPipelineJob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob">GoogleHealthcarePipelineJobReconciliationPipelineJob</a></code> | reconciliation_pipeline_job block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts">GoogleHealthcarePipelineJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

Healthcare Dataset under which the Pipeline Job is to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#dataset GoogleHealthcarePipelineJob#dataset}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location where the Pipeline Job is to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#location GoogleHealthcarePipelineJob#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the pipeline job. This field is user-assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#name GoogleHealthcarePipelineJob#name}

---

##### `backfillPipelineJob`<sup>Optional</sup> <a name="backfillPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.backfillPipelineJob"></a>

```typescript
public readonly backfillPipelineJob: GoogleHealthcarePipelineJobBackfillPipelineJob;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob">GoogleHealthcarePipelineJobBackfillPipelineJob</a>

backfill_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#backfill_pipeline_job GoogleHealthcarePipelineJob#backfill_pipeline_job}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#deletion_policy GoogleHealthcarePipelineJob#deletion_policy}

---

##### `disableLineage`<sup>Optional</sup> <a name="disableLineage" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.disableLineage"></a>

```typescript
public readonly disableLineage: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, disables writing lineage for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#disable_lineage GoogleHealthcarePipelineJob#disable_lineage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#id GoogleHealthcarePipelineJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-supplied key-value pairs used to organize Pipeline Jobs.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, and must conform to the following PCRE regular expression:
[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}
Label values are optional, must be between 1 and 63 characters long, have a
UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE
regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
No more than 64 labels can be associated with a given pipeline.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#labels GoogleHealthcarePipelineJob#labels}

---

##### `mappingPipelineJob`<sup>Optional</sup> <a name="mappingPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.mappingPipelineJob"></a>

```typescript
public readonly mappingPipelineJob: GoogleHealthcarePipelineJobMappingPipelineJob;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob">GoogleHealthcarePipelineJobMappingPipelineJob</a>

mapping_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#mapping_pipeline_job GoogleHealthcarePipelineJob#mapping_pipeline_job}

---

##### `reconciliationPipelineJob`<sup>Optional</sup> <a name="reconciliationPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.reconciliationPipelineJob"></a>

```typescript
public readonly reconciliationPipelineJob: GoogleHealthcarePipelineJobReconciliationPipelineJob;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob">GoogleHealthcarePipelineJobReconciliationPipelineJob</a>

reconciliation_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#reconciliation_pipeline_job GoogleHealthcarePipelineJob#reconciliation_pipeline_job}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleHealthcarePipelineJobTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts">GoogleHealthcarePipelineJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#timeouts GoogleHealthcarePipelineJob#timeouts}

---

### GoogleHealthcarePipelineJobMappingPipelineJob <a name="GoogleHealthcarePipelineJobMappingPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

const googleHealthcarePipelineJobMappingPipelineJob: googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.property.mappingConfig">mappingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig</a></code> | mapping_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.property.fhirStoreDestination">fhirStoreDestination</a></code> | <code>string</code> | If set, the mapping pipeline will write snapshots to this FHIR store without assigning stable IDs. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.property.fhirStreamingSource">fhirStreamingSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a></code> | fhir_streaming_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.property.reconciliationDestination">reconciliationDestination</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, a mapping pipeline will send output snapshots to the reconciliation pipeline in its dataset. |

---

##### `mappingConfig`<sup>Required</sup> <a name="mappingConfig" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.property.mappingConfig"></a>

```typescript
public readonly mappingConfig: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig</a>

mapping_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#mapping_config GoogleHealthcarePipelineJob#mapping_config}

---

##### `fhirStoreDestination`<sup>Optional</sup> <a name="fhirStoreDestination" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.property.fhirStoreDestination"></a>

```typescript
public readonly fhirStoreDestination: string;
```

- *Type:* string

If set, the mapping pipeline will write snapshots to this FHIR store without assigning stable IDs.

You must
grant your pipeline project's Cloud Healthcare Service
Agent serviceaccount healthcare.fhirResources.executeBundle
and healthcare.fhirResources.create permissions on the
destination store. The destination store must set
[disableReferentialIntegrity][FhirStore.disable_referential_integrity]
to true. The destination store must use FHIR version R4.
Format: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{fhirStoreID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#fhir_store_destination GoogleHealthcarePipelineJob#fhir_store_destination}

---

##### `fhirStreamingSource`<sup>Optional</sup> <a name="fhirStreamingSource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.property.fhirStreamingSource"></a>

```typescript
public readonly fhirStreamingSource: GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

fhir_streaming_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#fhir_streaming_source GoogleHealthcarePipelineJob#fhir_streaming_source}

---

##### `reconciliationDestination`<sup>Optional</sup> <a name="reconciliationDestination" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob.property.reconciliationDestination"></a>

```typescript
public readonly reconciliationDestination: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, a mapping pipeline will send output snapshots to the reconciliation pipeline in its dataset.

A reconciliation
pipeline must exist in this dataset before a mapping pipeline
with a reconciliation destination can be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#reconciliation_destination GoogleHealthcarePipelineJob#reconciliation_destination}

---

### GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource <a name="GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

const googleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource: googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.fhirStore">fhirStore</a></code> | <code>string</code> | The path to the FHIR store in the format projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.description">description</a></code> | <code>string</code> | Describes the streaming FHIR data source. |

---

##### `fhirStore`<sup>Required</sup> <a name="fhirStore" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.fhirStore"></a>

```typescript
public readonly fhirStore: string;
```

- *Type:* string

The path to the FHIR store in the format projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#fhir_store GoogleHealthcarePipelineJob#fhir_store}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Describes the streaming FHIR data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#description GoogleHealthcarePipelineJob#description}

---

### GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig <a name="GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

const googleHealthcarePipelineJobMappingPipelineJobMappingConfig: googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig.property.description">description</a></code> | <code>string</code> | Describes the mapping configuration. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig.property.whistleConfigSource">whistleConfigSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a></code> | whistle_config_source block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Describes the mapping configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#description GoogleHealthcarePipelineJob#description}

---

##### `whistleConfigSource`<sup>Optional</sup> <a name="whistleConfigSource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig.property.whistleConfigSource"></a>

```typescript
public readonly whistleConfigSource: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

whistle_config_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#whistle_config_source GoogleHealthcarePipelineJob#whistle_config_source}

---

### GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource <a name="GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

const googleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource: googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.importUriPrefix">importUriPrefix</a></code> | <code>string</code> | Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.uri">uri</a></code> | <code>string</code> | Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl. |

---

##### `importUriPrefix`<sup>Required</sup> <a name="importUriPrefix" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.importUriPrefix"></a>

```typescript
public readonly importUriPrefix: string;
```

- *Type:* string

Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#import_uri_prefix GoogleHealthcarePipelineJob#import_uri_prefix}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#uri GoogleHealthcarePipelineJob#uri}

---

### GoogleHealthcarePipelineJobReconciliationPipelineJob <a name="GoogleHealthcarePipelineJobReconciliationPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

const googleHealthcarePipelineJobReconciliationPipelineJob: googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob.property.matchingUriPrefix">matchingUriPrefix</a></code> | <code>string</code> | Specifies the top level directory of the matching configs used in all mapping pipelines, which extract properties for resources to be matched on. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob.property.mergeConfig">mergeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig</a></code> | merge_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob.property.fhirStoreDestination">fhirStoreDestination</a></code> | <code>string</code> | The harmonized FHIR store to write harmonized FHIR resources to, in the format of: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{id}. |

---

##### `matchingUriPrefix`<sup>Required</sup> <a name="matchingUriPrefix" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob.property.matchingUriPrefix"></a>

```typescript
public readonly matchingUriPrefix: string;
```

- *Type:* string

Specifies the top level directory of the matching configs used in all mapping pipelines, which extract properties for resources to be matched on.

Example: gs://{bucket-id}/{path/to/matching/configs}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#matching_uri_prefix GoogleHealthcarePipelineJob#matching_uri_prefix}

---

##### `mergeConfig`<sup>Required</sup> <a name="mergeConfig" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob.property.mergeConfig"></a>

```typescript
public readonly mergeConfig: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

merge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#merge_config GoogleHealthcarePipelineJob#merge_config}

---

##### `fhirStoreDestination`<sup>Optional</sup> <a name="fhirStoreDestination" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob.property.fhirStoreDestination"></a>

```typescript
public readonly fhirStoreDestination: string;
```

- *Type:* string

The harmonized FHIR store to write harmonized FHIR resources to, in the format of: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#fhir_store_destination GoogleHealthcarePipelineJob#fhir_store_destination}

---

### GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig <a name="GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

const googleHealthcarePipelineJobReconciliationPipelineJobMergeConfig: googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.whistleConfigSource">whistleConfigSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a></code> | whistle_config_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.description">description</a></code> | <code>string</code> | Describes the mapping configuration. |

---

##### `whistleConfigSource`<sup>Required</sup> <a name="whistleConfigSource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.whistleConfigSource"></a>

```typescript
public readonly whistleConfigSource: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

whistle_config_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#whistle_config_source GoogleHealthcarePipelineJob#whistle_config_source}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Describes the mapping configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#description GoogleHealthcarePipelineJob#description}

---

### GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource <a name="GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

const googleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource: googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.importUriPrefix">importUriPrefix</a></code> | <code>string</code> | Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.uri">uri</a></code> | <code>string</code> | Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl. |

---

##### `importUriPrefix`<sup>Required</sup> <a name="importUriPrefix" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.importUriPrefix"></a>

```typescript
public readonly importUriPrefix: string;
```

- *Type:* string

Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#import_uri_prefix GoogleHealthcarePipelineJob#import_uri_prefix}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#uri GoogleHealthcarePipelineJob#uri}

---

### GoogleHealthcarePipelineJobTimeouts <a name="GoogleHealthcarePipelineJobTimeouts" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

const googleHealthcarePipelineJobTimeouts: googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#create GoogleHealthcarePipelineJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#delete GoogleHealthcarePipelineJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#update GoogleHealthcarePipelineJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#create GoogleHealthcarePipelineJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#delete GoogleHealthcarePipelineJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_healthcare_pipeline_job#update GoogleHealthcarePipelineJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference <a name="GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

new googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.resetMappingPipelineJob">resetMappingPipelineJob</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMappingPipelineJob` <a name="resetMappingPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.resetMappingPipelineJob"></a>

```typescript
public resetMappingPipelineJob(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJobInput">mappingPipelineJobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJob">mappingPipelineJob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob">GoogleHealthcarePipelineJobBackfillPipelineJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mappingPipelineJobInput`<sup>Optional</sup> <a name="mappingPipelineJobInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJobInput"></a>

```typescript
public readonly mappingPipelineJobInput: string;
```

- *Type:* string

---

##### `mappingPipelineJob`<sup>Required</sup> <a name="mappingPipelineJob" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJob"></a>

```typescript
public readonly mappingPipelineJob: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleHealthcarePipelineJobBackfillPipelineJob;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobBackfillPipelineJob">GoogleHealthcarePipelineJobBackfillPipelineJob</a>

---


### GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference <a name="GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

new googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStoreInput">fhirStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStore">fhirStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fhirStoreInput`<sup>Optional</sup> <a name="fhirStoreInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStoreInput"></a>

```typescript
public readonly fhirStoreInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fhirStore`<sup>Required</sup> <a name="fhirStore" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStore"></a>

```typescript
public readonly fhirStore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

---


### GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference <a name="GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

new googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.putWhistleConfigSource">putWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetWhistleConfigSource">resetWhistleConfigSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWhistleConfigSource` <a name="putWhistleConfigSource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.putWhistleConfigSource"></a>

```typescript
public putWhistleConfigSource(value: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.putWhistleConfigSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetWhistleConfigSource` <a name="resetWhistleConfigSource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetWhistleConfigSource"></a>

```typescript
public resetWhistleConfigSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSource">whistleConfigSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSourceInput">whistleConfigSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `whistleConfigSource`<sup>Required</sup> <a name="whistleConfigSource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSource"></a>

```typescript
public readonly whistleConfigSource: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `whistleConfigSourceInput`<sup>Optional</sup> <a name="whistleConfigSourceInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSourceInput"></a>

```typescript
public readonly whistleConfigSourceInput: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig</a>

---


### GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference <a name="GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

new googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput">importUriPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefix">importUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `importUriPrefixInput`<sup>Optional</sup> <a name="importUriPrefixInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput"></a>

```typescript
public readonly importUriPrefixInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `importUriPrefix`<sup>Required</sup> <a name="importUriPrefix" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefix"></a>

```typescript
public readonly importUriPrefix: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

---


### GoogleHealthcarePipelineJobMappingPipelineJobOutputReference <a name="GoogleHealthcarePipelineJobMappingPipelineJobOutputReference" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

new googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.putFhirStreamingSource">putFhirStreamingSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.putMappingConfig">putMappingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStoreDestination">resetFhirStoreDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStreamingSource">resetFhirStreamingSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resetReconciliationDestination">resetReconciliationDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFhirStreamingSource` <a name="putFhirStreamingSource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.putFhirStreamingSource"></a>

```typescript
public putFhirStreamingSource(value: GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.putFhirStreamingSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

---

##### `putMappingConfig` <a name="putMappingConfig" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.putMappingConfig"></a>

```typescript
public putMappingConfig(value: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.putMappingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig</a>

---

##### `resetFhirStoreDestination` <a name="resetFhirStoreDestination" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStoreDestination"></a>

```typescript
public resetFhirStoreDestination(): void
```

##### `resetFhirStreamingSource` <a name="resetFhirStreamingSource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStreamingSource"></a>

```typescript
public resetFhirStreamingSource(): void
```

##### `resetReconciliationDestination` <a name="resetReconciliationDestination" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.resetReconciliationDestination"></a>

```typescript
public resetReconciliationDestination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSource">fhirStreamingSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfig">mappingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestinationInput">fhirStoreDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSourceInput">fhirStreamingSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfigInput">mappingConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestinationInput">reconciliationDestinationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestination">fhirStoreDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestination">reconciliationDestination</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob">GoogleHealthcarePipelineJobMappingPipelineJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fhirStreamingSource`<sup>Required</sup> <a name="fhirStreamingSource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSource"></a>

```typescript
public readonly fhirStreamingSource: GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference</a>

---

##### `mappingConfig`<sup>Required</sup> <a name="mappingConfig" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfig"></a>

```typescript
public readonly mappingConfig: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference</a>

---

##### `fhirStoreDestinationInput`<sup>Optional</sup> <a name="fhirStoreDestinationInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestinationInput"></a>

```typescript
public readonly fhirStoreDestinationInput: string;
```

- *Type:* string

---

##### `fhirStreamingSourceInput`<sup>Optional</sup> <a name="fhirStreamingSourceInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSourceInput"></a>

```typescript
public readonly fhirStreamingSourceInput: GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource">GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

---

##### `mappingConfigInput`<sup>Optional</sup> <a name="mappingConfigInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfigInput"></a>

```typescript
public readonly mappingConfigInput: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig">GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig</a>

---

##### `reconciliationDestinationInput`<sup>Optional</sup> <a name="reconciliationDestinationInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestinationInput"></a>

```typescript
public readonly reconciliationDestinationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fhirStoreDestination`<sup>Required</sup> <a name="fhirStoreDestination" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestination"></a>

```typescript
public readonly fhirStoreDestination: string;
```

- *Type:* string

---

##### `reconciliationDestination`<sup>Required</sup> <a name="reconciliationDestination" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestination"></a>

```typescript
public readonly reconciliationDestination: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleHealthcarePipelineJobMappingPipelineJob;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobMappingPipelineJob">GoogleHealthcarePipelineJobMappingPipelineJob</a>

---


### GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference <a name="GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

new googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.putWhistleConfigSource">putWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWhistleConfigSource` <a name="putWhistleConfigSource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.putWhistleConfigSource"></a>

```typescript
public putWhistleConfigSource(value: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.putWhistleConfigSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSource">whistleConfigSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSourceInput">whistleConfigSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `whistleConfigSource`<sup>Required</sup> <a name="whistleConfigSource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSource"></a>

```typescript
public readonly whistleConfigSource: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `whistleConfigSourceInput`<sup>Optional</sup> <a name="whistleConfigSourceInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSourceInput"></a>

```typescript
public readonly whistleConfigSourceInput: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

---


### GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference <a name="GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

new googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput">importUriPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefix">importUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `importUriPrefixInput`<sup>Optional</sup> <a name="importUriPrefixInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput"></a>

```typescript
public readonly importUriPrefixInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `importUriPrefix`<sup>Required</sup> <a name="importUriPrefix" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefix"></a>

```typescript
public readonly importUriPrefix: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

---


### GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference <a name="GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

new googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.putMergeConfig">putMergeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.resetFhirStoreDestination">resetFhirStoreDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMergeConfig` <a name="putMergeConfig" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.putMergeConfig"></a>

```typescript
public putMergeConfig(value: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.putMergeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

---

##### `resetFhirStoreDestination` <a name="resetFhirStoreDestination" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.resetFhirStoreDestination"></a>

```typescript
public resetFhirStoreDestination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfig">mergeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestinationInput">fhirStoreDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefixInput">matchingUriPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfigInput">mergeConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestination">fhirStoreDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefix">matchingUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob">GoogleHealthcarePipelineJobReconciliationPipelineJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mergeConfig`<sup>Required</sup> <a name="mergeConfig" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfig"></a>

```typescript
public readonly mergeConfig: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference</a>

---

##### `fhirStoreDestinationInput`<sup>Optional</sup> <a name="fhirStoreDestinationInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestinationInput"></a>

```typescript
public readonly fhirStoreDestinationInput: string;
```

- *Type:* string

---

##### `matchingUriPrefixInput`<sup>Optional</sup> <a name="matchingUriPrefixInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefixInput"></a>

```typescript
public readonly matchingUriPrefixInput: string;
```

- *Type:* string

---

##### `mergeConfigInput`<sup>Optional</sup> <a name="mergeConfigInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfigInput"></a>

```typescript
public readonly mergeConfigInput: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig">GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

---

##### `fhirStoreDestination`<sup>Required</sup> <a name="fhirStoreDestination" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestination"></a>

```typescript
public readonly fhirStoreDestination: string;
```

- *Type:* string

---

##### `matchingUriPrefix`<sup>Required</sup> <a name="matchingUriPrefix" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefix"></a>

```typescript
public readonly matchingUriPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleHealthcarePipelineJobReconciliationPipelineJob;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobReconciliationPipelineJob">GoogleHealthcarePipelineJobReconciliationPipelineJob</a>

---


### GoogleHealthcarePipelineJobTimeoutsOutputReference <a name="GoogleHealthcarePipelineJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleHealthcarePipelineJob } from '@cdktn/provider-google-beta'

new googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts">GoogleHealthcarePipelineJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleHealthcarePipelineJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleHealthcarePipelineJob.GoogleHealthcarePipelineJobTimeouts">GoogleHealthcarePipelineJobTimeouts</a>

---



