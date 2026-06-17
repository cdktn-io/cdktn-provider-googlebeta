# `googleClouddeployTarget` Submodule <a name="`googleClouddeployTarget` Submodule" id="@cdktn/provider-google-beta.googleClouddeployTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddeployTarget <a name="GoogleClouddeployTarget" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target google_clouddeploy_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTarget(scope: Construct, id: string, config: GoogleClouddeployTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig">GoogleClouddeployTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig">GoogleClouddeployTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAnthosCluster">putAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAssociatedEntities">putAssociatedEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putCustomTarget">putCustomTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putExecutionConfigs">putExecutionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putGke">putGke</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putMultiTarget">putMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putRun">putRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAnthosCluster">resetAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAssociatedEntities">resetAssociatedEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetCustomTarget">resetCustomTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetDeployParameters">resetDeployParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetExecutionConfigs">resetExecutionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetGke">resetGke</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetMultiTarget">resetMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetRequireApproval">resetRequireApproval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetRun">resetRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnthosCluster` <a name="putAnthosCluster" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAnthosCluster"></a>

```typescript
public putAnthosCluster(value: GoogleClouddeployTargetAnthosCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAnthosCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a>

---

##### `putAssociatedEntities` <a name="putAssociatedEntities" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAssociatedEntities"></a>

```typescript
public putAssociatedEntities(value: IResolvable | GoogleClouddeployTargetAssociatedEntities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAssociatedEntities.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities">GoogleClouddeployTargetAssociatedEntities</a>[]

---

##### `putCustomTarget` <a name="putCustomTarget" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putCustomTarget"></a>

```typescript
public putCustomTarget(value: GoogleClouddeployTargetCustomTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putCustomTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a>

---

##### `putExecutionConfigs` <a name="putExecutionConfigs" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putExecutionConfigs"></a>

```typescript
public putExecutionConfigs(value: IResolvable | GoogleClouddeployTargetExecutionConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putExecutionConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a>[]

---

##### `putGke` <a name="putGke" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putGke"></a>

```typescript
public putGke(value: GoogleClouddeployTargetGke): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putGke.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a>

---

##### `putMultiTarget` <a name="putMultiTarget" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putMultiTarget"></a>

```typescript
public putMultiTarget(value: GoogleClouddeployTargetMultiTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putMultiTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a>

---

##### `putRun` <a name="putRun" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putRun"></a>

```typescript
public putRun(value: GoogleClouddeployTargetRun): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putRun.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleClouddeployTargetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetAnthosCluster` <a name="resetAnthosCluster" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAnthosCluster"></a>

```typescript
public resetAnthosCluster(): void
```

##### `resetAssociatedEntities` <a name="resetAssociatedEntities" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAssociatedEntities"></a>

```typescript
public resetAssociatedEntities(): void
```

##### `resetCustomTarget` <a name="resetCustomTarget" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetCustomTarget"></a>

```typescript
public resetCustomTarget(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDeployParameters` <a name="resetDeployParameters" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetDeployParameters"></a>

```typescript
public resetDeployParameters(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExecutionConfigs` <a name="resetExecutionConfigs" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetExecutionConfigs"></a>

```typescript
public resetExecutionConfigs(): void
```

##### `resetGke` <a name="resetGke" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetGke"></a>

```typescript
public resetGke(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMultiTarget` <a name="resetMultiTarget" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetMultiTarget"></a>

```typescript
public resetMultiTarget(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRequireApproval` <a name="resetRequireApproval" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetRequireApproval"></a>

```typescript
public resetRequireApproval(): void
```

##### `resetRun` <a name="resetRun" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetRun"></a>

```typescript
public resetRun(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleClouddeployTarget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isConstruct"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

googleClouddeployTarget.GoogleClouddeployTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformElement"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

googleClouddeployTarget.GoogleClouddeployTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformResource"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

googleClouddeployTarget.GoogleClouddeployTarget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleClouddeployTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleClouddeployTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleClouddeployTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleClouddeployTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.anthosCluster">anthosCluster</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference">GoogleClouddeployTargetAnthosClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.associatedEntities">associatedEntities</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList">GoogleClouddeployTargetAssociatedEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.customTarget">customTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference">GoogleClouddeployTargetCustomTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.executionConfigs">executionConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList">GoogleClouddeployTargetExecutionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.gke">gke</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference">GoogleClouddeployTargetGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.multiTarget">multiTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference">GoogleClouddeployTargetMultiTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.run">run</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference">GoogleClouddeployTargetRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference">GoogleClouddeployTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.anthosClusterInput">anthosClusterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.associatedEntitiesInput">associatedEntitiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities">GoogleClouddeployTargetAssociatedEntities</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.customTargetInput">customTargetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.deployParametersInput">deployParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.executionConfigsInput">executionConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.gkeInput">gkeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.multiTargetInput">multiTargetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.requireApprovalInput">requireApprovalInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.runInput">runInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.deployParameters">deployParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.requireApproval">requireApproval</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `anthosCluster`<sup>Required</sup> <a name="anthosCluster" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.anthosCluster"></a>

```typescript
public readonly anthosCluster: GoogleClouddeployTargetAnthosClusterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference">GoogleClouddeployTargetAnthosClusterOutputReference</a>

---

##### `associatedEntities`<sup>Required</sup> <a name="associatedEntities" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.associatedEntities"></a>

```typescript
public readonly associatedEntities: GoogleClouddeployTargetAssociatedEntitiesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList">GoogleClouddeployTargetAssociatedEntitiesList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `customTarget`<sup>Required</sup> <a name="customTarget" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.customTarget"></a>

```typescript
public readonly customTarget: GoogleClouddeployTargetCustomTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference">GoogleClouddeployTargetCustomTargetOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `executionConfigs`<sup>Required</sup> <a name="executionConfigs" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.executionConfigs"></a>

```typescript
public readonly executionConfigs: GoogleClouddeployTargetExecutionConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList">GoogleClouddeployTargetExecutionConfigsList</a>

---

##### `gke`<sup>Required</sup> <a name="gke" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.gke"></a>

```typescript
public readonly gke: GoogleClouddeployTargetGkeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference">GoogleClouddeployTargetGkeOutputReference</a>

---

##### `multiTarget`<sup>Required</sup> <a name="multiTarget" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.multiTarget"></a>

```typescript
public readonly multiTarget: GoogleClouddeployTargetMultiTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference">GoogleClouddeployTargetMultiTargetOutputReference</a>

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.run"></a>

```typescript
public readonly run: GoogleClouddeployTargetRunOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference">GoogleClouddeployTargetRunOutputReference</a>

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleClouddeployTargetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference">GoogleClouddeployTargetTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `anthosClusterInput`<sup>Optional</sup> <a name="anthosClusterInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.anthosClusterInput"></a>

```typescript
public readonly anthosClusterInput: GoogleClouddeployTargetAnthosCluster;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a>

---

##### `associatedEntitiesInput`<sup>Optional</sup> <a name="associatedEntitiesInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.associatedEntitiesInput"></a>

```typescript
public readonly associatedEntitiesInput: IResolvable | GoogleClouddeployTargetAssociatedEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities">GoogleClouddeployTargetAssociatedEntities</a>[]

---

##### `customTargetInput`<sup>Optional</sup> <a name="customTargetInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.customTargetInput"></a>

```typescript
public readonly customTargetInput: GoogleClouddeployTargetCustomTarget;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `deployParametersInput`<sup>Optional</sup> <a name="deployParametersInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.deployParametersInput"></a>

```typescript
public readonly deployParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `executionConfigsInput`<sup>Optional</sup> <a name="executionConfigsInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.executionConfigsInput"></a>

```typescript
public readonly executionConfigsInput: IResolvable | GoogleClouddeployTargetExecutionConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a>[]

---

##### `gkeInput`<sup>Optional</sup> <a name="gkeInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.gkeInput"></a>

```typescript
public readonly gkeInput: GoogleClouddeployTargetGke;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `multiTargetInput`<sup>Optional</sup> <a name="multiTargetInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.multiTargetInput"></a>

```typescript
public readonly multiTargetInput: GoogleClouddeployTargetMultiTarget;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `requireApprovalInput`<sup>Optional</sup> <a name="requireApprovalInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.requireApprovalInput"></a>

```typescript
public readonly requireApprovalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `runInput`<sup>Optional</sup> <a name="runInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.runInput"></a>

```typescript
public readonly runInput: GoogleClouddeployTargetRun;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleClouddeployTargetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deployParameters`<sup>Required</sup> <a name="deployParameters" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.deployParameters"></a>

```typescript
public readonly deployParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `requireApproval`<sup>Required</sup> <a name="requireApproval" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.requireApproval"></a>

```typescript
public readonly requireApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddeployTargetAnthosCluster <a name="GoogleClouddeployTargetAnthosCluster" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

const googleClouddeployTargetAnthosCluster: googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster.property.membership">membership</a></code> | <code>string</code> | Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`. |

---

##### `membership`<sup>Optional</sup> <a name="membership" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#membership GoogleClouddeployTarget#membership}

---

### GoogleClouddeployTargetAssociatedEntities <a name="GoogleClouddeployTargetAssociatedEntities" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

const googleClouddeployTargetAssociatedEntities: googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities.property.entityId">entityId</a></code> | <code>string</code> | The name for the key in the map for which this object is mapped to in the API. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities.property.anthosClusters">anthosClusters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters">GoogleClouddeployTargetAssociatedEntitiesAnthosClusters</a>[]</code> | anthos_clusters block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities.property.gkeClusters">gkeClusters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters">GoogleClouddeployTargetAssociatedEntitiesGkeClusters</a>[]</code> | gke_clusters block. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

The name for the key in the map for which this object is mapped to in the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#entity_id GoogleClouddeployTarget#entity_id}

---

##### `anthosClusters`<sup>Optional</sup> <a name="anthosClusters" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities.property.anthosClusters"></a>

```typescript
public readonly anthosClusters: IResolvable | GoogleClouddeployTargetAssociatedEntitiesAnthosClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters">GoogleClouddeployTargetAssociatedEntitiesAnthosClusters</a>[]

anthos_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#anthos_clusters GoogleClouddeployTarget#anthos_clusters}

---

##### `gkeClusters`<sup>Optional</sup> <a name="gkeClusters" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities.property.gkeClusters"></a>

```typescript
public readonly gkeClusters: IResolvable | GoogleClouddeployTargetAssociatedEntitiesGkeClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters">GoogleClouddeployTargetAssociatedEntitiesGkeClusters</a>[]

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#gke_clusters GoogleClouddeployTarget#gke_clusters}

---

### GoogleClouddeployTargetAssociatedEntitiesAnthosClusters <a name="GoogleClouddeployTargetAssociatedEntitiesAnthosClusters" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

const googleClouddeployTargetAssociatedEntitiesAnthosClusters: googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters.property.membership">membership</a></code> | <code>string</code> | Optional. Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`. |

---

##### `membership`<sup>Optional</sup> <a name="membership" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

Optional. Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#membership GoogleClouddeployTarget#membership}

---

### GoogleClouddeployTargetAssociatedEntitiesGkeClusters <a name="GoogleClouddeployTargetAssociatedEntitiesGkeClusters" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

const googleClouddeployTargetAssociatedEntitiesGkeClusters: googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters.property.cluster">cluster</a></code> | <code>string</code> | Optional. Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters.property.internalIp">internalIp</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

Optional. Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#cluster GoogleClouddeployTarget#cluster}

---

##### `internalIp`<sup>Optional</sup> <a name="internalIp" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters.property.internalIp"></a>

```typescript
public readonly internalIp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional.

If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#internal_ip GoogleClouddeployTarget#internal_ip}

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#proxy_url GoogleClouddeployTarget#proxy_url}

---

### GoogleClouddeployTargetConfig <a name="GoogleClouddeployTargetConfig" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

const googleClouddeployTargetConfig: googleClouddeployTarget.GoogleClouddeployTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.name">name</a></code> | <code>string</code> | Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.anthosCluster">anthosCluster</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a></code> | anthos_cluster block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.associatedEntities">associatedEntities</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities">GoogleClouddeployTargetAssociatedEntities</a>[]</code> | associated_entities block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.customTarget">customTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a></code> | custom_target block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.deployParameters">deployParameters</a></code> | <code>{[ key: string ]: string}</code> | Optional. The deploy parameters to use for this target. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.description">description</a></code> | <code>string</code> | Optional. Description of the `Target`. Max length is 255 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.executionConfigs">executionConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a>[]</code> | execution_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.gke">gke</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a></code> | gke block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#id GoogleClouddeployTarget#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.multiTarget">multiTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a></code> | multi_target block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.requireApproval">requireApproval</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. Whether or not the `Target` requires approval. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.run">run</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a></code> | run block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#location GoogleClouddeployTarget#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#name GoogleClouddeployTarget#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#annotations GoogleClouddeployTarget#annotations}

---

##### `anthosCluster`<sup>Optional</sup> <a name="anthosCluster" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.anthosCluster"></a>

```typescript
public readonly anthosCluster: GoogleClouddeployTargetAnthosCluster;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a>

anthos_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#anthos_cluster GoogleClouddeployTarget#anthos_cluster}

---

##### `associatedEntities`<sup>Optional</sup> <a name="associatedEntities" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.associatedEntities"></a>

```typescript
public readonly associatedEntities: IResolvable | GoogleClouddeployTargetAssociatedEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities">GoogleClouddeployTargetAssociatedEntities</a>[]

associated_entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#associated_entities GoogleClouddeployTarget#associated_entities}

---

##### `customTarget`<sup>Optional</sup> <a name="customTarget" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.customTarget"></a>

```typescript
public readonly customTarget: GoogleClouddeployTargetCustomTarget;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a>

custom_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#custom_target GoogleClouddeployTarget#custom_target}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#deletion_policy GoogleClouddeployTarget#deletion_policy}

---

##### `deployParameters`<sup>Optional</sup> <a name="deployParameters" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.deployParameters"></a>

```typescript
public readonly deployParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. The deploy parameters to use for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#deploy_parameters GoogleClouddeployTarget#deploy_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of the `Target`. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#description GoogleClouddeployTarget#description}

---

##### `executionConfigs`<sup>Optional</sup> <a name="executionConfigs" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.executionConfigs"></a>

```typescript
public readonly executionConfigs: IResolvable | GoogleClouddeployTargetExecutionConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a>[]

execution_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#execution_configs GoogleClouddeployTarget#execution_configs}

---

##### `gke`<sup>Optional</sup> <a name="gke" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.gke"></a>

```typescript
public readonly gke: GoogleClouddeployTargetGke;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#gke GoogleClouddeployTarget#gke}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#id GoogleClouddeployTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#labels GoogleClouddeployTarget#labels}

---

##### `multiTarget`<sup>Optional</sup> <a name="multiTarget" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.multiTarget"></a>

```typescript
public readonly multiTarget: GoogleClouddeployTargetMultiTarget;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a>

multi_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#multi_target GoogleClouddeployTarget#multi_target}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#project GoogleClouddeployTarget#project}

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.requireApproval"></a>

```typescript
public readonly requireApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. Whether or not the `Target` requires approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#require_approval GoogleClouddeployTarget#require_approval}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.run"></a>

```typescript
public readonly run: GoogleClouddeployTargetRun;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#run GoogleClouddeployTarget#run}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleClouddeployTargetTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#timeouts GoogleClouddeployTarget#timeouts}

---

### GoogleClouddeployTargetCustomTarget <a name="GoogleClouddeployTargetCustomTarget" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

const googleClouddeployTargetCustomTarget: googleClouddeployTarget.GoogleClouddeployTargetCustomTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget.property.customTargetType">customTargetType</a></code> | <code>string</code> | Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`. |

---

##### `customTargetType`<sup>Required</sup> <a name="customTargetType" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget.property.customTargetType"></a>

```typescript
public readonly customTargetType: string;
```

- *Type:* string

Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#custom_target_type GoogleClouddeployTarget#custom_target_type}

---

### GoogleClouddeployTargetExecutionConfigs <a name="GoogleClouddeployTargetExecutionConfigs" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

const googleClouddeployTargetExecutionConfigs: googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.usages">usages</a></code> | <code>string[]</code> | Required. Usages when this configuration should be applied. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.artifactStorage">artifactStorage</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.defaultPool">defaultPool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPool">GoogleClouddeployTargetExecutionConfigsDefaultPool</a></code> | default_pool block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.executionTimeout">executionTimeout</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.privatePool">privatePool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePool">GoogleClouddeployTargetExecutionConfigsPrivatePool</a></code> | private_pool block. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.verbose">verbose</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. If true, additional logging will be enabled when running builds in this execution environment. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.workerPool">workerPool</a></code> | <code>string</code> | Optional. |

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.usages"></a>

```typescript
public readonly usages: string[];
```

- *Type:* string[]

Required. Usages when this configuration should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#usages GoogleClouddeployTarget#usages}

---

##### `artifactStorage`<sup>Optional</sup> <a name="artifactStorage" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.artifactStorage"></a>

```typescript
public readonly artifactStorage: string;
```

- *Type:* string

Optional.

Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#artifact_storage GoogleClouddeployTarget#artifact_storage}

---

##### `defaultPool`<sup>Optional</sup> <a name="defaultPool" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.defaultPool"></a>

```typescript
public readonly defaultPool: GoogleClouddeployTargetExecutionConfigsDefaultPool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPool">GoogleClouddeployTargetExecutionConfigsDefaultPool</a>

default_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#default_pool GoogleClouddeployTarget#default_pool}

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: string;
```

- *Type:* string

Optional.

Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#execution_timeout GoogleClouddeployTarget#execution_timeout}

---

##### `privatePool`<sup>Optional</sup> <a name="privatePool" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.privatePool"></a>

```typescript
public readonly privatePool: GoogleClouddeployTargetExecutionConfigsPrivatePool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePool">GoogleClouddeployTargetExecutionConfigsPrivatePool</a>

private_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#private_pool GoogleClouddeployTarget#private_pool}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#service_account GoogleClouddeployTarget#service_account}

---

##### `verbose`<sup>Optional</sup> <a name="verbose" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.verbose"></a>

```typescript
public readonly verbose: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. If true, additional logging will be enabled when running builds in this execution environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#verbose GoogleClouddeployTarget#verbose}

---

##### `workerPool`<sup>Optional</sup> <a name="workerPool" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.workerPool"></a>

```typescript
public readonly workerPool: string;
```

- *Type:* string

Optional.

The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#worker_pool GoogleClouddeployTarget#worker_pool}

---

### GoogleClouddeployTargetExecutionConfigsDefaultPool <a name="GoogleClouddeployTargetExecutionConfigsDefaultPool" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPool.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

const googleClouddeployTargetExecutionConfigsDefaultPool: googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPool.property.artifactStorage">artifactStorage</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPool.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used. |

---

##### `artifactStorage`<sup>Optional</sup> <a name="artifactStorage" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPool.property.artifactStorage"></a>

```typescript
public readonly artifactStorage: string;
```

- *Type:* string

Optional.

Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#artifact_storage GoogleClouddeployTarget#artifact_storage}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPool.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#service_account GoogleClouddeployTarget#service_account}

---

### GoogleClouddeployTargetExecutionConfigsPrivatePool <a name="GoogleClouddeployTargetExecutionConfigsPrivatePool" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePool.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

const googleClouddeployTargetExecutionConfigsPrivatePool: googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePool.property.workerPool">workerPool</a></code> | <code>string</code> | Required. Resource name of the Cloud Build worker pool to use. The format is `projects/{project}/locations/{location}/workerPools/{pool}`. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePool.property.artifactStorage">artifactStorage</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePool.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used. |

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePool.property.workerPool"></a>

```typescript
public readonly workerPool: string;
```

- *Type:* string

Required. Resource name of the Cloud Build worker pool to use. The format is `projects/{project}/locations/{location}/workerPools/{pool}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#worker_pool GoogleClouddeployTarget#worker_pool}

---

##### `artifactStorage`<sup>Optional</sup> <a name="artifactStorage" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePool.property.artifactStorage"></a>

```typescript
public readonly artifactStorage: string;
```

- *Type:* string

Optional.

Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#artifact_storage GoogleClouddeployTarget#artifact_storage}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePool.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#service_account GoogleClouddeployTarget#service_account}

---

### GoogleClouddeployTargetGke <a name="GoogleClouddeployTargetGke" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

const googleClouddeployTargetGke: googleClouddeployTarget.GoogleClouddeployTargetGke = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.cluster">cluster</a></code> | <code>string</code> | Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.dnsEndpoint">dnsEndpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.internalIp">internalIp</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#cluster GoogleClouddeployTarget#cluster}

---

##### `dnsEndpoint`<sup>Optional</sup> <a name="dnsEndpoint" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.dnsEndpoint"></a>

```typescript
public readonly dnsEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional.

If set, the cluster will be accessed using the DNS endpoint. Note that both `dns_endpoint` and `internal_ip` cannot be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#dns_endpoint GoogleClouddeployTarget#dns_endpoint}

---

##### `internalIp`<sup>Optional</sup> <a name="internalIp" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.internalIp"></a>

```typescript
public readonly internalIp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional.

If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#internal_ip GoogleClouddeployTarget#internal_ip}

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#proxy_url GoogleClouddeployTarget#proxy_url}

---

### GoogleClouddeployTargetMultiTarget <a name="GoogleClouddeployTargetMultiTarget" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

const googleClouddeployTargetMultiTarget: googleClouddeployTarget.GoogleClouddeployTargetMultiTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget.property.targetIds">targetIds</a></code> | <code>string[]</code> | Required. The target_ids of this multiTarget. |

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

Required. The target_ids of this multiTarget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#target_ids GoogleClouddeployTarget#target_ids}

---

### GoogleClouddeployTargetRun <a name="GoogleClouddeployTargetRun" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

const googleClouddeployTargetRun: googleClouddeployTarget.GoogleClouddeployTargetRun = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun.property.location">location</a></code> | <code>string</code> | Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#location GoogleClouddeployTarget#location}

---

### GoogleClouddeployTargetTimeouts <a name="GoogleClouddeployTargetTimeouts" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

const googleClouddeployTargetTimeouts: googleClouddeployTarget.GoogleClouddeployTargetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#create GoogleClouddeployTarget#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#delete GoogleClouddeployTarget#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#update GoogleClouddeployTarget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#create GoogleClouddeployTarget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#delete GoogleClouddeployTarget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_clouddeploy_target#update GoogleClouddeployTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddeployTargetAnthosClusterOutputReference <a name="GoogleClouddeployTargetAnthosClusterOutputReference" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resetMembership">resetMembership</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMembership` <a name="resetMembership" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resetMembership"></a>

```typescript
public resetMembership(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.membershipInput">membershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.membership">membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `membershipInput`<sup>Optional</sup> <a name="membershipInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.membershipInput"></a>

```typescript
public readonly membershipInput: string;
```

- *Type:* string

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployTargetAnthosCluster;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a>

---


### GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList <a name="GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.get"></a>

```typescript
public get(index: number): GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters">GoogleClouddeployTargetAssociatedEntitiesAnthosClusters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployTargetAssociatedEntitiesAnthosClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters">GoogleClouddeployTargetAssociatedEntitiesAnthosClusters</a>[]

---


### GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference <a name="GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resetMembership">resetMembership</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMembership` <a name="resetMembership" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resetMembership"></a>

```typescript
public resetMembership(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.membershipInput">membershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.membership">membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters">GoogleClouddeployTargetAssociatedEntitiesAnthosClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `membershipInput`<sup>Optional</sup> <a name="membershipInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.membershipInput"></a>

```typescript
public readonly membershipInput: string;
```

- *Type:* string

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployTargetAssociatedEntitiesAnthosClusters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters">GoogleClouddeployTargetAssociatedEntitiesAnthosClusters</a>

---


### GoogleClouddeployTargetAssociatedEntitiesGkeClustersList <a name="GoogleClouddeployTargetAssociatedEntitiesGkeClustersList" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.get"></a>

```typescript
public get(index: number): GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters">GoogleClouddeployTargetAssociatedEntitiesGkeClusters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployTargetAssociatedEntitiesGkeClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters">GoogleClouddeployTargetAssociatedEntitiesGkeClusters</a>[]

---


### GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference <a name="GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetInternalIp">resetInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetProxyUrl">resetProxyUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCluster` <a name="resetCluster" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetCluster"></a>

```typescript
public resetCluster(): void
```

##### `resetInternalIp` <a name="resetInternalIp" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetInternalIp"></a>

```typescript
public resetInternalIp(): void
```

##### `resetProxyUrl` <a name="resetProxyUrl" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetProxyUrl"></a>

```typescript
public resetProxyUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalIpInput">internalIpInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.proxyUrlInput">proxyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalIp">internalIp</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters">GoogleClouddeployTargetAssociatedEntitiesGkeClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `internalIpInput`<sup>Optional</sup> <a name="internalIpInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalIpInput"></a>

```typescript
public readonly internalIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proxyUrlInput`<sup>Optional</sup> <a name="proxyUrlInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.proxyUrlInput"></a>

```typescript
public readonly proxyUrlInput: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalIp"></a>

```typescript
public readonly internalIp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proxyUrl`<sup>Required</sup> <a name="proxyUrl" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployTargetAssociatedEntitiesGkeClusters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters">GoogleClouddeployTargetAssociatedEntitiesGkeClusters</a>

---


### GoogleClouddeployTargetAssociatedEntitiesList <a name="GoogleClouddeployTargetAssociatedEntitiesList" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.get"></a>

```typescript
public get(index: number): GoogleClouddeployTargetAssociatedEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities">GoogleClouddeployTargetAssociatedEntities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployTargetAssociatedEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities">GoogleClouddeployTargetAssociatedEntities</a>[]

---


### GoogleClouddeployTargetAssociatedEntitiesOutputReference <a name="GoogleClouddeployTargetAssociatedEntitiesOutputReference" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.putAnthosClusters">putAnthosClusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.putGkeClusters">putGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.resetAnthosClusters">resetAnthosClusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.resetGkeClusters">resetGkeClusters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnthosClusters` <a name="putAnthosClusters" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.putAnthosClusters"></a>

```typescript
public putAnthosClusters(value: IResolvable | GoogleClouddeployTargetAssociatedEntitiesAnthosClusters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.putAnthosClusters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters">GoogleClouddeployTargetAssociatedEntitiesAnthosClusters</a>[]

---

##### `putGkeClusters` <a name="putGkeClusters" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.putGkeClusters"></a>

```typescript
public putGkeClusters(value: IResolvable | GoogleClouddeployTargetAssociatedEntitiesGkeClusters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.putGkeClusters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters">GoogleClouddeployTargetAssociatedEntitiesGkeClusters</a>[]

---

##### `resetAnthosClusters` <a name="resetAnthosClusters" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.resetAnthosClusters"></a>

```typescript
public resetAnthosClusters(): void
```

##### `resetGkeClusters` <a name="resetGkeClusters" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.resetGkeClusters"></a>

```typescript
public resetGkeClusters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.anthosClusters">anthosClusters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList">GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.gkeClusters">gkeClusters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList">GoogleClouddeployTargetAssociatedEntitiesGkeClustersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.anthosClustersInput">anthosClustersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters">GoogleClouddeployTargetAssociatedEntitiesAnthosClusters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.gkeClustersInput">gkeClustersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters">GoogleClouddeployTargetAssociatedEntitiesGkeClusters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities">GoogleClouddeployTargetAssociatedEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `anthosClusters`<sup>Required</sup> <a name="anthosClusters" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.anthosClusters"></a>

```typescript
public readonly anthosClusters: GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList">GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList</a>

---

##### `gkeClusters`<sup>Required</sup> <a name="gkeClusters" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.gkeClusters"></a>

```typescript
public readonly gkeClusters: GoogleClouddeployTargetAssociatedEntitiesGkeClustersList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList">GoogleClouddeployTargetAssociatedEntitiesGkeClustersList</a>

---

##### `anthosClustersInput`<sup>Optional</sup> <a name="anthosClustersInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.anthosClustersInput"></a>

```typescript
public readonly anthosClustersInput: IResolvable | GoogleClouddeployTargetAssociatedEntitiesAnthosClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters">GoogleClouddeployTargetAssociatedEntitiesAnthosClusters</a>[]

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `gkeClustersInput`<sup>Optional</sup> <a name="gkeClustersInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.gkeClustersInput"></a>

```typescript
public readonly gkeClustersInput: IResolvable | GoogleClouddeployTargetAssociatedEntitiesGkeClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters">GoogleClouddeployTargetAssociatedEntitiesGkeClusters</a>[]

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployTargetAssociatedEntities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities">GoogleClouddeployTargetAssociatedEntities</a>

---


### GoogleClouddeployTargetCustomTargetOutputReference <a name="GoogleClouddeployTargetCustomTargetOutputReference" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.customTargetTypeInput">customTargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.customTargetType">customTargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customTargetTypeInput`<sup>Optional</sup> <a name="customTargetTypeInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.customTargetTypeInput"></a>

```typescript
public readonly customTargetTypeInput: string;
```

- *Type:* string

---

##### `customTargetType`<sup>Required</sup> <a name="customTargetType" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.customTargetType"></a>

```typescript
public readonly customTargetType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployTargetCustomTarget;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a>

---


### GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference <a name="GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.resetArtifactStorage">resetArtifactStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArtifactStorage` <a name="resetArtifactStorage" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.resetArtifactStorage"></a>

```typescript
public resetArtifactStorage(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.artifactStorageInput">artifactStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.artifactStorage">artifactStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPool">GoogleClouddeployTargetExecutionConfigsDefaultPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactStorageInput`<sup>Optional</sup> <a name="artifactStorageInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.artifactStorageInput"></a>

```typescript
public readonly artifactStorageInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `artifactStorage`<sup>Required</sup> <a name="artifactStorage" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.artifactStorage"></a>

```typescript
public readonly artifactStorage: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployTargetExecutionConfigsDefaultPool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPool">GoogleClouddeployTargetExecutionConfigsDefaultPool</a>

---


### GoogleClouddeployTargetExecutionConfigsList <a name="GoogleClouddeployTargetExecutionConfigsList" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.get"></a>

```typescript
public get(index: number): GoogleClouddeployTargetExecutionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployTargetExecutionConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a>[]

---


### GoogleClouddeployTargetExecutionConfigsOutputReference <a name="GoogleClouddeployTargetExecutionConfigsOutputReference" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.putDefaultPool">putDefaultPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.putPrivatePool">putPrivatePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetArtifactStorage">resetArtifactStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetDefaultPool">resetDefaultPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetExecutionTimeout">resetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetPrivatePool">resetPrivatePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetVerbose">resetVerbose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetWorkerPool">resetWorkerPool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultPool` <a name="putDefaultPool" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.putDefaultPool"></a>

```typescript
public putDefaultPool(value: GoogleClouddeployTargetExecutionConfigsDefaultPool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.putDefaultPool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPool">GoogleClouddeployTargetExecutionConfigsDefaultPool</a>

---

##### `putPrivatePool` <a name="putPrivatePool" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.putPrivatePool"></a>

```typescript
public putPrivatePool(value: GoogleClouddeployTargetExecutionConfigsPrivatePool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.putPrivatePool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePool">GoogleClouddeployTargetExecutionConfigsPrivatePool</a>

---

##### `resetArtifactStorage` <a name="resetArtifactStorage" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetArtifactStorage"></a>

```typescript
public resetArtifactStorage(): void
```

##### `resetDefaultPool` <a name="resetDefaultPool" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetDefaultPool"></a>

```typescript
public resetDefaultPool(): void
```

##### `resetExecutionTimeout` <a name="resetExecutionTimeout" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetExecutionTimeout"></a>

```typescript
public resetExecutionTimeout(): void
```

##### `resetPrivatePool` <a name="resetPrivatePool" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetPrivatePool"></a>

```typescript
public resetPrivatePool(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetVerbose` <a name="resetVerbose" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetVerbose"></a>

```typescript
public resetVerbose(): void
```

##### `resetWorkerPool` <a name="resetWorkerPool" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetWorkerPool"></a>

```typescript
public resetWorkerPool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.defaultPool">defaultPool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference">GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.privatePool">privatePool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference">GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.artifactStorageInput">artifactStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.defaultPoolInput">defaultPoolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPool">GoogleClouddeployTargetExecutionConfigsDefaultPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.executionTimeoutInput">executionTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.privatePoolInput">privatePoolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePool">GoogleClouddeployTargetExecutionConfigsPrivatePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.usagesInput">usagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.verboseInput">verboseInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.workerPoolInput">workerPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.artifactStorage">artifactStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.executionTimeout">executionTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.usages">usages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.verbose">verbose</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.workerPool">workerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultPool`<sup>Required</sup> <a name="defaultPool" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.defaultPool"></a>

```typescript
public readonly defaultPool: GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference">GoogleClouddeployTargetExecutionConfigsDefaultPoolOutputReference</a>

---

##### `privatePool`<sup>Required</sup> <a name="privatePool" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.privatePool"></a>

```typescript
public readonly privatePool: GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference">GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference</a>

---

##### `artifactStorageInput`<sup>Optional</sup> <a name="artifactStorageInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.artifactStorageInput"></a>

```typescript
public readonly artifactStorageInput: string;
```

- *Type:* string

---

##### `defaultPoolInput`<sup>Optional</sup> <a name="defaultPoolInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.defaultPoolInput"></a>

```typescript
public readonly defaultPoolInput: GoogleClouddeployTargetExecutionConfigsDefaultPool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsDefaultPool">GoogleClouddeployTargetExecutionConfigsDefaultPool</a>

---

##### `executionTimeoutInput`<sup>Optional</sup> <a name="executionTimeoutInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.executionTimeoutInput"></a>

```typescript
public readonly executionTimeoutInput: string;
```

- *Type:* string

---

##### `privatePoolInput`<sup>Optional</sup> <a name="privatePoolInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.privatePoolInput"></a>

```typescript
public readonly privatePoolInput: GoogleClouddeployTargetExecutionConfigsPrivatePool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePool">GoogleClouddeployTargetExecutionConfigsPrivatePool</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `usagesInput`<sup>Optional</sup> <a name="usagesInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.usagesInput"></a>

```typescript
public readonly usagesInput: string[];
```

- *Type:* string[]

---

##### `verboseInput`<sup>Optional</sup> <a name="verboseInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.verboseInput"></a>

```typescript
public readonly verboseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `workerPoolInput`<sup>Optional</sup> <a name="workerPoolInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.workerPoolInput"></a>

```typescript
public readonly workerPoolInput: string;
```

- *Type:* string

---

##### `artifactStorage`<sup>Required</sup> <a name="artifactStorage" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.artifactStorage"></a>

```typescript
public readonly artifactStorage: string;
```

- *Type:* string

---

##### `executionTimeout`<sup>Required</sup> <a name="executionTimeout" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.usages"></a>

```typescript
public readonly usages: string[];
```

- *Type:* string[]

---

##### `verbose`<sup>Required</sup> <a name="verbose" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.verbose"></a>

```typescript
public readonly verbose: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.workerPool"></a>

```typescript
public readonly workerPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployTargetExecutionConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a>

---


### GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference <a name="GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.resetArtifactStorage">resetArtifactStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArtifactStorage` <a name="resetArtifactStorage" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.resetArtifactStorage"></a>

```typescript
public resetArtifactStorage(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.artifactStorageInput">artifactStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.workerPoolInput">workerPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.artifactStorage">artifactStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.workerPool">workerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePool">GoogleClouddeployTargetExecutionConfigsPrivatePool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactStorageInput`<sup>Optional</sup> <a name="artifactStorageInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.artifactStorageInput"></a>

```typescript
public readonly artifactStorageInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `workerPoolInput`<sup>Optional</sup> <a name="workerPoolInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.workerPoolInput"></a>

```typescript
public readonly workerPoolInput: string;
```

- *Type:* string

---

##### `artifactStorage`<sup>Required</sup> <a name="artifactStorage" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.artifactStorage"></a>

```typescript
public readonly artifactStorage: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.workerPool"></a>

```typescript
public readonly workerPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployTargetExecutionConfigsPrivatePool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsPrivatePool">GoogleClouddeployTargetExecutionConfigsPrivatePool</a>

---


### GoogleClouddeployTargetGkeOutputReference <a name="GoogleClouddeployTargetGkeOutputReference" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetDnsEndpoint">resetDnsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetInternalIp">resetInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetProxyUrl">resetProxyUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCluster` <a name="resetCluster" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetCluster"></a>

```typescript
public resetCluster(): void
```

##### `resetDnsEndpoint` <a name="resetDnsEndpoint" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetDnsEndpoint"></a>

```typescript
public resetDnsEndpoint(): void
```

##### `resetInternalIp` <a name="resetInternalIp" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetInternalIp"></a>

```typescript
public resetInternalIp(): void
```

##### `resetProxyUrl` <a name="resetProxyUrl" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetProxyUrl"></a>

```typescript
public resetProxyUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.dnsEndpointInput">dnsEndpointInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalIpInput">internalIpInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.proxyUrlInput">proxyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.dnsEndpoint">dnsEndpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalIp">internalIp</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `dnsEndpointInput`<sup>Optional</sup> <a name="dnsEndpointInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.dnsEndpointInput"></a>

```typescript
public readonly dnsEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalIpInput`<sup>Optional</sup> <a name="internalIpInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalIpInput"></a>

```typescript
public readonly internalIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proxyUrlInput`<sup>Optional</sup> <a name="proxyUrlInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.proxyUrlInput"></a>

```typescript
public readonly proxyUrlInput: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `dnsEndpoint`<sup>Required</sup> <a name="dnsEndpoint" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.dnsEndpoint"></a>

```typescript
public readonly dnsEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalIp"></a>

```typescript
public readonly internalIp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proxyUrl`<sup>Required</sup> <a name="proxyUrl" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployTargetGke;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a>

---


### GoogleClouddeployTargetMultiTargetOutputReference <a name="GoogleClouddeployTargetMultiTargetOutputReference" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.targetIdsInput">targetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.targetIds">targetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetIdsInput`<sup>Optional</sup> <a name="targetIdsInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.targetIdsInput"></a>

```typescript
public readonly targetIdsInput: string[];
```

- *Type:* string[]

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployTargetMultiTarget;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a>

---


### GoogleClouddeployTargetRunOutputReference <a name="GoogleClouddeployTargetRunOutputReference" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployTargetRun;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a>

---


### GoogleClouddeployTargetTimeoutsOutputReference <a name="GoogleClouddeployTargetTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktn/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployTargetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a>

---



