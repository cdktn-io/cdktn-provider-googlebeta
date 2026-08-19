# `googleVertexAiEvaluationMetric` Submodule <a name="`googleVertexAiEvaluationMetric` Submodule" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiEvaluationMetric <a name="GoogleVertexAiEvaluationMetric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric google_vertex_ai_evaluation_metric}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer"></a>

```typescript
import { googleVertexAiEvaluationMetric } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric(scope: Construct, id: string, config: GoogleVertexAiEvaluationMetricConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig">GoogleVertexAiEvaluationMetricConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig">GoogleVertexAiEvaluationMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetEvaluationMetricId">resetEvaluationMetricId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetGcsUri">resetGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putEncryptionSpec"></a>

```typescript
public putEncryptionSpec(value: GoogleVertexAiEvaluationMetricEncryptionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVertexAiEvaluationMetricTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetEncryptionSpec"></a>

```typescript
public resetEncryptionSpec(): void
```

##### `resetEvaluationMetricId` <a name="resetEvaluationMetricId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetEvaluationMetricId"></a>

```typescript
public resetEvaluationMetricId(): void
```

##### `resetGcsUri` <a name="resetGcsUri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetGcsUri"></a>

```typescript
public resetGcsUri(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMetric` <a name="resetMetric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiEvaluationMetric resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isConstruct"></a>

```typescript
import { googleVertexAiEvaluationMetric } from '@cdktn/provider-google-beta'

googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformElement"></a>

```typescript
import { googleVertexAiEvaluationMetric } from '@cdktn/provider-google-beta'

googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformResource"></a>

```typescript
import { googleVertexAiEvaluationMetric } from '@cdktn/provider-google-beta'

googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport"></a>

```typescript
import { googleVertexAiEvaluationMetric } from '@cdktn/provider-google-beta'

googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleVertexAiEvaluationMetric resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiEvaluationMetric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiEvaluationMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiEvaluationMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference">GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference">GoogleVertexAiEvaluationMetricTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.evaluationMetricIdInput">evaluationMetricIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.gcsUriInput">gcsUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.evaluationMetricId">evaluationMetricId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.gcsUri">gcsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference">GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiEvaluationMetricTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference">GoogleVertexAiEvaluationMetricTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.encryptionSpecInput"></a>

```typescript
public readonly encryptionSpecInput: GoogleVertexAiEvaluationMetricEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a>

---

##### `evaluationMetricIdInput`<sup>Optional</sup> <a name="evaluationMetricIdInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.evaluationMetricIdInput"></a>

```typescript
public readonly evaluationMetricIdInput: string;
```

- *Type:* string

---

##### `gcsUriInput`<sup>Optional</sup> <a name="gcsUriInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.gcsUriInput"></a>

```typescript
public readonly gcsUriInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVertexAiEvaluationMetricTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `evaluationMetricId`<sup>Required</sup> <a name="evaluationMetricId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.evaluationMetricId"></a>

```typescript
public readonly evaluationMetricId: string;
```

- *Type:* string

---

##### `gcsUri`<sup>Required</sup> <a name="gcsUri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.gcsUri"></a>

```typescript
public readonly gcsUri: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiEvaluationMetricConfig <a name="GoogleVertexAiEvaluationMetricConfig" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.Initializer"></a>

```typescript
import { googleVertexAiEvaluationMetric } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationMetricConfig: googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.displayName">displayName</a></code> | <code>string</code> | The user-friendly display name for the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.region">region</a></code> | <code>string</code> | The region of the EvaluationMetric. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.description">description</a></code> | <code>string</code> | A description of the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.evaluationMetricId">evaluationMetricId</a></code> | <code>string</code> | The ID to use for the EvaluationMetric, which will become the final component of the resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.gcsUri">gcsUri</a></code> | <code>string</code> | The Google Cloud Storage URI that stores the metric specification. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#id GoogleVertexAiEvaluationMetric#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels for the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.metric">metric</a></code> | <code>string</code> | The metric configuration as a JSON string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#project GoogleVertexAiEvaluationMetric#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The user-friendly display name for the EvaluationMetric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#display_name GoogleVertexAiEvaluationMetric#display_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the EvaluationMetric. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#region GoogleVertexAiEvaluationMetric#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#deletion_policy GoogleVertexAiEvaluationMetric#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the EvaluationMetric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#description GoogleVertexAiEvaluationMetric#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: GoogleVertexAiEvaluationMetricEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#encryption_spec GoogleVertexAiEvaluationMetric#encryption_spec}

---

##### `evaluationMetricId`<sup>Optional</sup> <a name="evaluationMetricId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.evaluationMetricId"></a>

```typescript
public readonly evaluationMetricId: string;
```

- *Type:* string

The ID to use for the EvaluationMetric, which will become the final component of the resource name.

This value should be 1-63 characters,
and valid characters are /[a-z][0-9]-/. The first character must be
a lowercase letter, and the last character must be a lowercase letter
or number. If not provided, the server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#evaluation_metric_id GoogleVertexAiEvaluationMetric#evaluation_metric_id}

---

##### `gcsUri`<sup>Optional</sup> <a name="gcsUri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.gcsUri"></a>

```typescript
public readonly gcsUri: string;
```

- *Type:* string

The Google Cloud Storage URI that stores the metric specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#gcs_uri GoogleVertexAiEvaluationMetric#gcs_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#id GoogleVertexAiEvaluationMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels for the EvaluationMetric.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#labels GoogleVertexAiEvaluationMetric#labels}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

The metric configuration as a JSON string.

Uses camelCase field names
to match the API format. Supports LLM-based metrics and custom code
execution metrics.
See the [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)
for the full schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#metric GoogleVertexAiEvaluationMetric#metric}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#project GoogleVertexAiEvaluationMetric#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiEvaluationMetricTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#timeouts GoogleVertexAiEvaluationMetric#timeouts}

---

### GoogleVertexAiEvaluationMetricEncryptionSpec <a name="GoogleVertexAiEvaluationMetricEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec.Initializer"></a>

```typescript
import { googleVertexAiEvaluationMetric } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationMetricEncryptionSpec: googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Required. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Required.

The Cloud KMS resource identifier of the customer managed encryption key
used to protect a resource. Has the form:
'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
The key needs to be in the same region as where the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#kms_key_name GoogleVertexAiEvaluationMetric#kms_key_name}

---

### GoogleVertexAiEvaluationMetricTimeouts <a name="GoogleVertexAiEvaluationMetricTimeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.Initializer"></a>

```typescript
import { googleVertexAiEvaluationMetric } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationMetricTimeouts: googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#create GoogleVertexAiEvaluationMetric#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#delete GoogleVertexAiEvaluationMetric#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#update GoogleVertexAiEvaluationMetric#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#create GoogleVertexAiEvaluationMetric#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#delete GoogleVertexAiEvaluationMetric#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_vertex_ai_evaluation_metric#update GoogleVertexAiEvaluationMetric#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference <a name="GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationMetric } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiEvaluationMetricEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a>

---


### GoogleVertexAiEvaluationMetricTimeoutsOutputReference <a name="GoogleVertexAiEvaluationMetricTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationMetric } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiEvaluationMetricTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a>

---



