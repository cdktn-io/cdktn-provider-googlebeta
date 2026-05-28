# `googleDataflowJob` Submodule <a name="`googleDataflowJob` Submodule" id="@cdktn/provider-google-beta.googleDataflowJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataflowJob <a name="GoogleDataflowJob" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job google_dataflow_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer"></a>

```typescript
import { googleDataflowJob } from '@cdktn/provider-google-beta'

new googleDataflowJob.GoogleDataflowJob(scope: Construct, id: string, config: GoogleDataflowJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig">GoogleDataflowJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig">GoogleDataflowJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetAdditionalExperiments">resetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetEnableStreamingEngine">resetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetIpConfiguration">resetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetMaxWorkers">resetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetOnDelete">resetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetSkipWaitOnJobTermination">resetSkipWaitOnJobTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetTransformNameMapping">resetTransformNameMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataflowJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a>

---

##### `resetAdditionalExperiments` <a name="resetAdditionalExperiments" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetAdditionalExperiments"></a>

```typescript
public resetAdditionalExperiments(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetEnableStreamingEngine` <a name="resetEnableStreamingEngine" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetEnableStreamingEngine"></a>

```typescript
public resetEnableStreamingEngine(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpConfiguration` <a name="resetIpConfiguration" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetIpConfiguration"></a>

```typescript
public resetIpConfiguration(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetMaxWorkers` <a name="resetMaxWorkers" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetMaxWorkers"></a>

```typescript
public resetMaxWorkers(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetOnDelete` <a name="resetOnDelete" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetOnDelete"></a>

```typescript
public resetOnDelete(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```

##### `resetSkipWaitOnJobTermination` <a name="resetSkipWaitOnJobTermination" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetSkipWaitOnJobTermination"></a>

```typescript
public resetSkipWaitOnJobTermination(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransformNameMapping` <a name="resetTransformNameMapping" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetTransformNameMapping"></a>

```typescript
public resetTransformNameMapping(): void
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataflowJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isConstruct"></a>

```typescript
import { googleDataflowJob } from '@cdktn/provider-google-beta'

googleDataflowJob.GoogleDataflowJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformElement"></a>

```typescript
import { googleDataflowJob } from '@cdktn/provider-google-beta'

googleDataflowJob.GoogleDataflowJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformResource"></a>

```typescript
import { googleDataflowJob } from '@cdktn/provider-google-beta'

googleDataflowJob.GoogleDataflowJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport"></a>

```typescript
import { googleDataflowJob } from '@cdktn/provider-google-beta'

googleDataflowJob.GoogleDataflowJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDataflowJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataflowJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataflowJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataflowJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference">GoogleDataflowJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.additionalExperimentsInput">additionalExperimentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.enableStreamingEngineInput">enableStreamingEngineInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.maxWorkersInput">maxWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.onDeleteInput">onDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.skipWaitOnJobTerminationInput">skipWaitOnJobTerminationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tempGcsLocationInput">tempGcsLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.templateGcsPathInput">templateGcsPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.transformNameMappingInput">transformNameMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.additionalExperiments">additionalExperiments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.ipConfiguration">ipConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.onDelete">onDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.skipWaitOnJobTermination">skipWaitOnJobTermination</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tempGcsLocation">tempGcsLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.templateGcsPath">templateGcsPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.transformNameMapping">transformNameMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataflowJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference">GoogleDataflowJobTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `additionalExperimentsInput`<sup>Optional</sup> <a name="additionalExperimentsInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.additionalExperimentsInput"></a>

```typescript
public readonly additionalExperimentsInput: string[];
```

- *Type:* string[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `enableStreamingEngineInput`<sup>Optional</sup> <a name="enableStreamingEngineInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.enableStreamingEngineInput"></a>

```typescript
public readonly enableStreamingEngineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.ipConfigurationInput"></a>

```typescript
public readonly ipConfigurationInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `maxWorkersInput`<sup>Optional</sup> <a name="maxWorkersInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.maxWorkersInput"></a>

```typescript
public readonly maxWorkersInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `onDeleteInput`<sup>Optional</sup> <a name="onDeleteInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.onDeleteInput"></a>

```typescript
public readonly onDeleteInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `skipWaitOnJobTerminationInput`<sup>Optional</sup> <a name="skipWaitOnJobTerminationInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.skipWaitOnJobTerminationInput"></a>

```typescript
public readonly skipWaitOnJobTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `tempGcsLocationInput`<sup>Optional</sup> <a name="tempGcsLocationInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tempGcsLocationInput"></a>

```typescript
public readonly tempGcsLocationInput: string;
```

- *Type:* string

---

##### `templateGcsPathInput`<sup>Optional</sup> <a name="templateGcsPathInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.templateGcsPathInput"></a>

```typescript
public readonly templateGcsPathInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataflowJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a>

---

##### `transformNameMappingInput`<sup>Optional</sup> <a name="transformNameMappingInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.transformNameMappingInput"></a>

```typescript
public readonly transformNameMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `additionalExperiments`<sup>Required</sup> <a name="additionalExperiments" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.additionalExperiments"></a>

```typescript
public readonly additionalExperiments: string[];
```

- *Type:* string[]

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `enableStreamingEngine`<sup>Required</sup> <a name="enableStreamingEngine" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.enableStreamingEngine"></a>

```typescript
public readonly enableStreamingEngine: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `maxWorkers`<sup>Required</sup> <a name="maxWorkers" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `onDelete`<sup>Required</sup> <a name="onDelete" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.onDelete"></a>

```typescript
public readonly onDelete: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `skipWaitOnJobTermination`<sup>Required</sup> <a name="skipWaitOnJobTermination" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.skipWaitOnJobTermination"></a>

```typescript
public readonly skipWaitOnJobTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `tempGcsLocation`<sup>Required</sup> <a name="tempGcsLocation" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tempGcsLocation"></a>

```typescript
public readonly tempGcsLocation: string;
```

- *Type:* string

---

##### `templateGcsPath`<sup>Required</sup> <a name="templateGcsPath" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.templateGcsPath"></a>

```typescript
public readonly templateGcsPath: string;
```

- *Type:* string

---

##### `transformNameMapping`<sup>Required</sup> <a name="transformNameMapping" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.transformNameMapping"></a>

```typescript
public readonly transformNameMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataflowJobConfig <a name="GoogleDataflowJobConfig" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.Initializer"></a>

```typescript
import { googleDataflowJob } from '@cdktn/provider-google-beta'

const googleDataflowJobConfig: googleDataflowJob.GoogleDataflowJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.name">name</a></code> | <code>string</code> | A unique name for the resource, required by Dataflow. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.tempGcsLocation">tempGcsLocation</a></code> | <code>string</code> | A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.templateGcsPath">templateGcsPath</a></code> | <code>string</code> | The Google Cloud Storage path to the Dataflow job template. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.additionalExperiments">additionalExperiments</a></code> | <code>string[]</code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#id GoogleDataflowJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.ipConfiguration">ipConfiguration</a></code> | <code>string</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User labels to be specified for the job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.machineType">machineType</a></code> | <code>string</code> | The machine type to use for the job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | The number of workers permitted to work on the job. More workers may improve processing speed at additional cost. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.network">network</a></code> | <code>string</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.onDelete">onDelete</a></code> | <code>string</code> | One of "drain" or "cancel". Specifies behavior of deletion during terraform destroy. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Key/Value pairs to be passed to the Dataflow job (as used in the template). |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.project">project</a></code> | <code>string</code> | The project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.region">region</a></code> | <code>string</code> | The region in which the created job should run. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.skipWaitOnJobTermination">skipWaitOnJobTermination</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.subnetwork">subnetwork</a></code> | <code>string</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.transformNameMapping">transformNameMapping</a></code> | <code>{[ key: string ]: string}</code> | Only applicable when updating a pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.zone">zone</a></code> | <code>string</code> | The zone in which the created job should run. If it is not provided, the provider zone is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique name for the resource, required by Dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#name GoogleDataflowJob#name}

---

##### `tempGcsLocation`<sup>Required</sup> <a name="tempGcsLocation" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.tempGcsLocation"></a>

```typescript
public readonly tempGcsLocation: string;
```

- *Type:* string

A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#temp_gcs_location GoogleDataflowJob#temp_gcs_location}

---

##### `templateGcsPath`<sup>Required</sup> <a name="templateGcsPath" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.templateGcsPath"></a>

```typescript
public readonly templateGcsPath: string;
```

- *Type:* string

The Google Cloud Storage path to the Dataflow job template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#template_gcs_path GoogleDataflowJob#template_gcs_path}

---

##### `additionalExperiments`<sup>Optional</sup> <a name="additionalExperiments" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.additionalExperiments"></a>

```typescript
public readonly additionalExperiments: string[];
```

- *Type:* string[]

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#additional_experiments GoogleDataflowJob#additional_experiments}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#deletion_policy GoogleDataflowJob#deletion_policy}

---

##### `enableStreamingEngine`<sup>Optional</sup> <a name="enableStreamingEngine" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.enableStreamingEngine"></a>

```typescript
public readonly enableStreamingEngine: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#enable_streaming_engine GoogleDataflowJob#enable_streaming_engine}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#id GoogleDataflowJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipConfiguration`<sup>Optional</sup> <a name="ipConfiguration" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: string;
```

- *Type:* string

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#ip_configuration GoogleDataflowJob#ip_configuration}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#kms_key_name GoogleDataflowJob#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
				Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#labels GoogleDataflowJob#labels}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The machine type to use for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#machine_type GoogleDataflowJob#machine_type}

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

The number of workers permitted to work on the job. More workers may improve processing speed at additional cost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#max_workers GoogleDataflowJob#max_workers}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#network GoogleDataflowJob#network}

---

##### `onDelete`<sup>Optional</sup> <a name="onDelete" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.onDelete"></a>

```typescript
public readonly onDelete: string;
```

- *Type:* string

One of "drain" or "cancel". Specifies behavior of deletion during terraform destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#on_delete GoogleDataflowJob#on_delete}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Key/Value pairs to be passed to the Dataflow job (as used in the template).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#parameters GoogleDataflowJob#parameters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#project GoogleDataflowJob#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#region GoogleDataflowJob#region}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#service_account_email GoogleDataflowJob#service_account_email}

---

##### `skipWaitOnJobTermination`<sup>Optional</sup> <a name="skipWaitOnJobTermination" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.skipWaitOnJobTermination"></a>

```typescript
public readonly skipWaitOnJobTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#skip_wait_on_job_termination GoogleDataflowJob#skip_wait_on_job_termination}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#subnetwork GoogleDataflowJob#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataflowJobTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#timeouts GoogleDataflowJob#timeouts}

---

##### `transformNameMapping`<sup>Optional</sup> <a name="transformNameMapping" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.transformNameMapping"></a>

```typescript
public readonly transformNameMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#transform_name_mapping GoogleDataflowJob#transform_name_mapping}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The zone in which the created job should run. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#zone GoogleDataflowJob#zone}

---

### GoogleDataflowJobTimeouts <a name="GoogleDataflowJobTimeouts" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts.Initializer"></a>

```typescript
import { googleDataflowJob } from '@cdktn/provider-google-beta'

const googleDataflowJobTimeouts: googleDataflowJob.GoogleDataflowJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#update GoogleDataflowJob#update}. |

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataflow_job#update GoogleDataflowJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataflowJobTimeoutsOutputReference <a name="GoogleDataflowJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataflowJob } from '@cdktn/provider-google-beta'

new googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataflowJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a>

---



