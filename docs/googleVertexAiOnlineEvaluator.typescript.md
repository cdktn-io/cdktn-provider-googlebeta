# `googleVertexAiOnlineEvaluator` Submodule <a name="`googleVertexAiOnlineEvaluator` Submodule" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiOnlineEvaluator <a name="GoogleVertexAiOnlineEvaluator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator google_vertex_ai_online_evaluator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator(scope: Construct, id: string, config: GoogleVertexAiOnlineEvaluatorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig">GoogleVertexAiOnlineEvaluatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig">GoogleVertexAiOnlineEvaluatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putCloudObservability">putCloudObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putMetricSources">putMetricSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudObservability` <a name="putCloudObservability" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putCloudObservability"></a>

```typescript
public putCloudObservability(value: GoogleVertexAiOnlineEvaluatorCloudObservability): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putCloudObservability.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a>

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putConfig"></a>

```typescript
public putConfig(value: GoogleVertexAiOnlineEvaluatorConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a>

---

##### `putMetricSources` <a name="putMetricSources" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putMetricSources"></a>

```typescript
public putMetricSources(value: IResolvable | GoogleVertexAiOnlineEvaluatorMetricSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putMetricSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVertexAiOnlineEvaluatorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiOnlineEvaluator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isConstruct"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformElement"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformResource"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleVertexAiOnlineEvaluator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiOnlineEvaluator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiOnlineEvaluator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiOnlineEvaluator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cloudObservability">cloudObservability</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference">GoogleVertexAiOnlineEvaluatorConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.metricSources">metricSources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList">GoogleVertexAiOnlineEvaluatorMetricSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.stateDetails">stateDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList">GoogleVertexAiOnlineEvaluatorStateDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference">GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.agentResourceInput">agentResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cloudObservabilityInput">cloudObservabilityInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.configInput">configInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.metricSourcesInput">metricSourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.agentResource">agentResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudObservability`<sup>Required</sup> <a name="cloudObservability" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cloudObservability"></a>

```typescript
public readonly cloudObservability: GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.config"></a>

```typescript
public readonly config: GoogleVertexAiOnlineEvaluatorConfigAOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference">GoogleVertexAiOnlineEvaluatorConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `metricSources`<sup>Required</sup> <a name="metricSources" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.metricSources"></a>

```typescript
public readonly metricSources: GoogleVertexAiOnlineEvaluatorMetricSourcesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList">GoogleVertexAiOnlineEvaluatorMetricSourcesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.stateDetails"></a>

```typescript
public readonly stateDetails: GoogleVertexAiOnlineEvaluatorStateDetailsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList">GoogleVertexAiOnlineEvaluatorStateDetailsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference">GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `agentResourceInput`<sup>Optional</sup> <a name="agentResourceInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.agentResourceInput"></a>

```typescript
public readonly agentResourceInput: string;
```

- *Type:* string

---

##### `cloudObservabilityInput`<sup>Optional</sup> <a name="cloudObservabilityInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cloudObservabilityInput"></a>

```typescript
public readonly cloudObservabilityInput: GoogleVertexAiOnlineEvaluatorCloudObservability;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.configInput"></a>

```typescript
public readonly configInput: GoogleVertexAiOnlineEvaluatorConfigA;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricSourcesInput`<sup>Optional</sup> <a name="metricSourcesInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.metricSourcesInput"></a>

```typescript
public readonly metricSourcesInput: IResolvable | GoogleVertexAiOnlineEvaluatorMetricSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVertexAiOnlineEvaluatorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a>

---

##### `agentResource`<sup>Required</sup> <a name="agentResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.agentResource"></a>

```typescript
public readonly agentResource: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiOnlineEvaluatorCloudObservability <a name="GoogleVertexAiOnlineEvaluatorCloudObservability" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorCloudObservability: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.openTelemetry">openTelemetry</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | open_telemetry block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.logView">logView</a></code> | <code>string</code> | Optional log view that will be used to query logs. If empty, the project's default view ('projects/{{project_id}}') will be used. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.sessionScope">sessionScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | session_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.traceScope">traceScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | trace_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.traceView">traceView</a></code> | <code>string</code> | Optional trace view that will be used to query traces. |

---

##### `openTelemetry`<sup>Required</sup> <a name="openTelemetry" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.openTelemetry"></a>

```typescript
public readonly openTelemetry: GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

open_telemetry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#open_telemetry GoogleVertexAiOnlineEvaluator#open_telemetry}

---

##### `logView`<sup>Optional</sup> <a name="logView" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.logView"></a>

```typescript
public readonly logView: string;
```

- *Type:* string

Optional log view that will be used to query logs. If empty, the project's default view ('projects/{{project_id}}') will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#log_view GoogleVertexAiOnlineEvaluator#log_view}

---

##### `sessionScope`<sup>Optional</sup> <a name="sessionScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.sessionScope"></a>

```typescript
public readonly sessionScope: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

session_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#session_scope GoogleVertexAiOnlineEvaluator#session_scope}

---

##### `traceScope`<sup>Optional</sup> <a name="traceScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.traceScope"></a>

```typescript
public readonly traceScope: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

trace_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#trace_scope GoogleVertexAiOnlineEvaluator#trace_scope}

---

##### `traceView`<sup>Optional</sup> <a name="traceView" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.traceView"></a>

```typescript
public readonly traceView: string;
```

- *Type:* string

Optional trace view that will be used to query traces.

If empty, the
'_AllSpans' view from the '_Trace' US bucket will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#trace_view GoogleVertexAiOnlineEvaluator#trace_view}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.property.semconvVersion">semconvVersion</a></code> | <code>string</code> | Defines which version of the OTel Semantic Convention the data follows. Can be "1.39.0" or newer. |

---

##### `semconvVersion`<sup>Required</sup> <a name="semconvVersion" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.property.semconvVersion"></a>

```typescript
public readonly semconvVersion: string;
```

- *Type:* string

Defines which version of the OTel Semantic Convention the data follows. Can be "1.39.0" or newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#semconv_version GoogleVertexAiOnlineEvaluator#semconv_version}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorCloudObservabilitySessionScope: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.filter">filter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.inactivityTrigger">inactivityTrigger</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | inactivity_trigger block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.filter"></a>

```typescript
public readonly filter: IResolvable | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#filter GoogleVertexAiOnlineEvaluator#filter}

---

##### `inactivityTrigger`<sup>Optional</sup> <a name="inactivityTrigger" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.inactivityTrigger"></a>

```typescript
public readonly inactivityTrigger: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

inactivity_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#inactivity_trigger GoogleVertexAiOnlineEvaluator#inactivity_trigger}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | duration block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCallErrors">modelCallErrors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | model_call_errors block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCalls">modelCalls</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | model_calls block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCallErrors">toolCallErrors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | tool_call_errors block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCalls">toolCalls</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | tool_calls block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.totalTokenUsage">totalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | total_token_usage block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.userTurns">userTurns</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | user_turns block. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.duration"></a>

```typescript
public readonly duration: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#duration GoogleVertexAiOnlineEvaluator#duration}

---

##### `modelCallErrors`<sup>Optional</sup> <a name="modelCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCallErrors"></a>

```typescript
public readonly modelCallErrors: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

model_call_errors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#model_call_errors GoogleVertexAiOnlineEvaluator#model_call_errors}

---

##### `modelCalls`<sup>Optional</sup> <a name="modelCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCalls"></a>

```typescript
public readonly modelCalls: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

model_calls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#model_calls GoogleVertexAiOnlineEvaluator#model_calls}

---

##### `toolCallErrors`<sup>Optional</sup> <a name="toolCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCallErrors"></a>

```typescript
public readonly toolCallErrors: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

tool_call_errors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#tool_call_errors GoogleVertexAiOnlineEvaluator#tool_call_errors}

---

##### `toolCalls`<sup>Optional</sup> <a name="toolCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCalls"></a>

```typescript
public readonly toolCalls: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

tool_calls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#tool_calls GoogleVertexAiOnlineEvaluator#tool_calls}

---

##### `totalTokenUsage`<sup>Optional</sup> <a name="totalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.totalTokenUsage"></a>

```typescript
public readonly totalTokenUsage: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

total_token_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#total_token_usage GoogleVertexAiOnlineEvaluator#total_token_usage}

---

##### `userTurns`<sup>Optional</sup> <a name="userTurns" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.userTurns"></a>

```typescript
public readonly userTurns: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

user_turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#user_turns GoogleVertexAiOnlineEvaluator#user_turns}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.property.threshold">threshold</a></code> | <code>string</code> | The amount of time that must pass with no new traces before a session is considered ready for evaluation. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

The amount of time that must pass with no new traces before a session is considered ready for evaluation.

Must be a positive
duration no greater than 7 days (604800 seconds), e.g. "3600s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#threshold GoogleVertexAiOnlineEvaluator#threshold}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorCloudObservabilityTraceScope: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope.property.filter">filter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]</code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope.property.filter"></a>

```typescript
public readonly filter: IResolvable | GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#filter GoogleVertexAiOnlineEvaluator#filter}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | duration block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.totalTokenUsage">totalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | total_token_usage block. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.duration"></a>

```typescript
public readonly duration: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#duration GoogleVertexAiOnlineEvaluator#duration}

---

##### `totalTokenUsage`<sup>Optional</sup> <a name="totalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.totalTokenUsage"></a>

```typescript
public readonly totalTokenUsage: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

total_token_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#total_token_usage GoogleVertexAiOnlineEvaluator#total_token_usage}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorConfig <a name="GoogleVertexAiOnlineEvaluatorConfig" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorConfig: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.agentResource">agentResource</a></code> | <code>string</code> | The name of the agent that the OnlineEvaluator evaluates periodically. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.cloudObservability">cloudObservability</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a></code> | cloud_observability block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.metricSources">metricSources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>[]</code> | metric_sources block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable name for the OnlineEvaluator. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#id GoogleVertexAiOnlineEvaluator#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#project GoogleVertexAiOnlineEvaluator#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.region">region</a></code> | <code>string</code> | The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentResource`<sup>Required</sup> <a name="agentResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.agentResource"></a>

```typescript
public readonly agentResource: string;
```

- *Type:* string

The name of the agent that the OnlineEvaluator evaluates periodically.

This value is used to filter the traces with a matching cloud.resource_id
and link the evaluation results with relevant dashboards/UIs. This field
is immutable; once set, it cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#agent_resource GoogleVertexAiOnlineEvaluator#agent_resource}

---

##### `cloudObservability`<sup>Required</sup> <a name="cloudObservability" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.cloudObservability"></a>

```typescript
public readonly cloudObservability: GoogleVertexAiOnlineEvaluatorCloudObservability;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a>

cloud_observability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#cloud_observability GoogleVertexAiOnlineEvaluator#cloud_observability}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.config"></a>

```typescript
public readonly config: GoogleVertexAiOnlineEvaluatorConfigA;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#config GoogleVertexAiOnlineEvaluator#config}

---

##### `metricSources`<sup>Required</sup> <a name="metricSources" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.metricSources"></a>

```typescript
public readonly metricSources: IResolvable | GoogleVertexAiOnlineEvaluatorMetricSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>[]

metric_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#metric_sources GoogleVertexAiOnlineEvaluator#metric_sources}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#deletion_policy GoogleVertexAiOnlineEvaluator#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable name for the OnlineEvaluator.

The name doesn't have to be
unique. The name can consist of any UTF-8 characters. The maximum length
is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#display_name GoogleVertexAiOnlineEvaluator#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#id GoogleVertexAiOnlineEvaluator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#project GoogleVertexAiOnlineEvaluator#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#region GoogleVertexAiOnlineEvaluator#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiOnlineEvaluatorTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#timeouts GoogleVertexAiOnlineEvaluator#timeouts}

---

### GoogleVertexAiOnlineEvaluatorConfigA <a name="GoogleVertexAiOnlineEvaluatorConfigA" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorConfigA: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA.property.maxEvaluatedSamplesPerRun">maxEvaluatedSamplesPerRun</a></code> | <code>string</code> | The maximum number of evaluations to perform per run. If set to 0, the number is unbounded. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA.property.randomSampling">randomSampling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a></code> | random_sampling block. |

---

##### `maxEvaluatedSamplesPerRun`<sup>Optional</sup> <a name="maxEvaluatedSamplesPerRun" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA.property.maxEvaluatedSamplesPerRun"></a>

```typescript
public readonly maxEvaluatedSamplesPerRun: string;
```

- *Type:* string

The maximum number of evaluations to perform per run. If set to 0, the number is unbounded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#max_evaluated_samples_per_run GoogleVertexAiOnlineEvaluator#max_evaluated_samples_per_run}

---

##### `randomSampling`<sup>Optional</sup> <a name="randomSampling" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA.property.randomSampling"></a>

```typescript
public readonly randomSampling: GoogleVertexAiOnlineEvaluatorConfigRandomSampling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a>

random_sampling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#random_sampling GoogleVertexAiOnlineEvaluator#random_sampling}

---

### GoogleVertexAiOnlineEvaluatorConfigRandomSampling <a name="GoogleVertexAiOnlineEvaluatorConfigRandomSampling" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorConfigRandomSampling: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling.property.percentage">percentage</a></code> | <code>number</code> | The percentage of traces to sample for evaluation. Must be an integer between 1 and 100. |

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

The percentage of traces to sample for evaluation. Must be an integer between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#percentage GoogleVertexAiOnlineEvaluator#percentage}

---

### GoogleVertexAiOnlineEvaluatorMetricSources <a name="GoogleVertexAiOnlineEvaluatorMetricSources" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorMetricSources: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources.property.metric">metric</a></code> | <code>string</code> | Inline metric config, provided as a JSON-formatted string using camelCase field names to match the API format (see the [Metric API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)). The suggested predefined 'metricSpecName' values depend on the evaluation scope configured in 'cloud_observability'; a predefined metric must match the scope or the create request will be rejected:   - 'trace_scope' (single trace): 'final_response_quality_v1',     'tool_use_quality_v1', 'hallucination_v1', 'safety_v1'.   - 'session_scope' (multi-turn session):     'multi_turn_task_success_v1', 'multi_turn_tool_use_quality_v1',     'multi_turn_trajectory_quality_v1'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources.property.metricResourceName">metricResourceName</a></code> | <code>string</code> | Resource name of a registered metric (a 'google_vertex_ai_evaluation_metric'), e.g. projects/{{project}}/locations/{{region}}/evaluationMetrics/{{id}}. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

Inline metric config, provided as a JSON-formatted string using camelCase field names to match the API format (see the [Metric API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)). The suggested predefined 'metricSpecName' values depend on the evaluation scope configured in 'cloud_observability'; a predefined metric must match the scope or the create request will be rejected:   - 'trace_scope' (single trace): 'final_response_quality_v1',     'tool_use_quality_v1', 'hallucination_v1', 'safety_v1'.   - 'session_scope' (multi-turn session):     'multi_turn_task_success_v1', 'multi_turn_tool_use_quality_v1',     'multi_turn_trajectory_quality_v1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#metric GoogleVertexAiOnlineEvaluator#metric}

---

##### `metricResourceName`<sup>Optional</sup> <a name="metricResourceName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources.property.metricResourceName"></a>

```typescript
public readonly metricResourceName: string;
```

- *Type:* string

Resource name of a registered metric (a 'google_vertex_ai_evaluation_metric'), e.g. projects/{{project}}/locations/{{region}}/evaluationMetrics/{{id}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#metric_resource_name GoogleVertexAiOnlineEvaluator#metric_resource_name}

---

### GoogleVertexAiOnlineEvaluatorStateDetails <a name="GoogleVertexAiOnlineEvaluatorStateDetails" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetails.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorStateDetails: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetails = { ... }
```


### GoogleVertexAiOnlineEvaluatorTimeouts <a name="GoogleVertexAiOnlineEvaluatorTimeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

const googleVertexAiOnlineEvaluatorTimeouts: googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#create GoogleVertexAiOnlineEvaluator#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#delete GoogleVertexAiOnlineEvaluator#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#update GoogleVertexAiOnlineEvaluator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#create GoogleVertexAiOnlineEvaluator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#delete GoogleVertexAiOnlineEvaluator#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#update GoogleVertexAiOnlineEvaluator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersionInput">semconvVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersion">semconvVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `semconvVersionInput`<sup>Optional</sup> <a name="semconvVersionInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersionInput"></a>

```typescript
public readonly semconvVersionInput: string;
```

- *Type:* string

---

##### `semconvVersion`<sup>Required</sup> <a name="semconvVersion" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersion"></a>

```typescript
public readonly semconvVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry">putOpenTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope">putSessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope">putTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetLogView">resetLogView</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetSessionScope">resetSessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceScope">resetTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceView">resetTraceView</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOpenTelemetry` <a name="putOpenTelemetry" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry"></a>

```typescript
public putOpenTelemetry(value: GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---

##### `putSessionScope` <a name="putSessionScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope"></a>

```typescript
public putSessionScope(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---

##### `putTraceScope` <a name="putTraceScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope"></a>

```typescript
public putTraceScope(value: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---

##### `resetLogView` <a name="resetLogView" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetLogView"></a>

```typescript
public resetLogView(): void
```

##### `resetSessionScope` <a name="resetSessionScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetSessionScope"></a>

```typescript
public resetSessionScope(): void
```

##### `resetTraceScope` <a name="resetTraceScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceScope"></a>

```typescript
public resetTraceScope(): void
```

##### `resetTraceView` <a name="resetTraceView" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceView"></a>

```typescript
public resetTraceView(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetry">openTelemetry</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScope">sessionScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScope">traceScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logViewInput">logViewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetryInput">openTelemetryInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScopeInput">sessionScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScopeInput">traceScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceViewInput">traceViewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logView">logView</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceView">traceView</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `openTelemetry`<sup>Required</sup> <a name="openTelemetry" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetry"></a>

```typescript
public readonly openTelemetry: GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference</a>

---

##### `sessionScope`<sup>Required</sup> <a name="sessionScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScope"></a>

```typescript
public readonly sessionScope: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference</a>

---

##### `traceScope`<sup>Required</sup> <a name="traceScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScope"></a>

```typescript
public readonly traceScope: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference</a>

---

##### `logViewInput`<sup>Optional</sup> <a name="logViewInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logViewInput"></a>

```typescript
public readonly logViewInput: string;
```

- *Type:* string

---

##### `openTelemetryInput`<sup>Optional</sup> <a name="openTelemetryInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetryInput"></a>

```typescript
public readonly openTelemetryInput: GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---

##### `sessionScopeInput`<sup>Optional</sup> <a name="sessionScopeInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScopeInput"></a>

```typescript
public readonly sessionScopeInput: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---

##### `traceScopeInput`<sup>Optional</sup> <a name="traceScopeInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScopeInput"></a>

```typescript
public readonly traceScopeInput: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---

##### `traceViewInput`<sup>Optional</sup> <a name="traceViewInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceViewInput"></a>

```typescript
public readonly traceViewInput: string;
```

- *Type:* string

---

##### `logView`<sup>Required</sup> <a name="logView" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logView"></a>

```typescript
public readonly logView: string;
```

- *Type:* string

---

##### `traceView`<sup>Required</sup> <a name="traceView" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceView"></a>

```typescript
public readonly traceView: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorCloudObservability;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get"></a>

```typescript
public get(index: number): GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration">putDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors">putModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls">putModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors">putToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls">putToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage">putTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns">putUserTurns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCallErrors">resetModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCalls">resetModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCallErrors">resetToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCalls">resetToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetTotalTokenUsage">resetTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetUserTurns">resetUserTurns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuration` <a name="putDuration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration"></a>

```typescript
public putDuration(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---

##### `putModelCallErrors` <a name="putModelCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors"></a>

```typescript
public putModelCallErrors(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---

##### `putModelCalls` <a name="putModelCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls"></a>

```typescript
public putModelCalls(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---

##### `putToolCallErrors` <a name="putToolCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors"></a>

```typescript
public putToolCallErrors(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---

##### `putToolCalls` <a name="putToolCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls"></a>

```typescript
public putToolCalls(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---

##### `putTotalTokenUsage` <a name="putTotalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage"></a>

```typescript
public putTotalTokenUsage(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---

##### `putUserTurns` <a name="putUserTurns" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns"></a>

```typescript
public putUserTurns(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetModelCallErrors` <a name="resetModelCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCallErrors"></a>

```typescript
public resetModelCallErrors(): void
```

##### `resetModelCalls` <a name="resetModelCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCalls"></a>

```typescript
public resetModelCalls(): void
```

##### `resetToolCallErrors` <a name="resetToolCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCallErrors"></a>

```typescript
public resetToolCallErrors(): void
```

##### `resetToolCalls` <a name="resetToolCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCalls"></a>

```typescript
public resetToolCalls(): void
```

##### `resetTotalTokenUsage` <a name="resetTotalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetTotalTokenUsage"></a>

```typescript
public resetTotalTokenUsage(): void
```

##### `resetUserTurns` <a name="resetUserTurns" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetUserTurns"></a>

```typescript
public resetUserTurns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrors">modelCallErrors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCalls">modelCalls</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrors">toolCallErrors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCalls">toolCalls</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsage">totalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurns">userTurns</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.durationInput">durationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrorsInput">modelCallErrorsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallsInput">modelCallsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrorsInput">toolCallErrorsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallsInput">toolCallsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsageInput">totalTokenUsageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurnsInput">userTurnsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.duration"></a>

```typescript
public readonly duration: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference</a>

---

##### `modelCallErrors`<sup>Required</sup> <a name="modelCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrors"></a>

```typescript
public readonly modelCallErrors: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference</a>

---

##### `modelCalls`<sup>Required</sup> <a name="modelCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCalls"></a>

```typescript
public readonly modelCalls: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference</a>

---

##### `toolCallErrors`<sup>Required</sup> <a name="toolCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrors"></a>

```typescript
public readonly toolCallErrors: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference</a>

---

##### `toolCalls`<sup>Required</sup> <a name="toolCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCalls"></a>

```typescript
public readonly toolCalls: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference</a>

---

##### `totalTokenUsage`<sup>Required</sup> <a name="totalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsage"></a>

```typescript
public readonly totalTokenUsage: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference</a>

---

##### `userTurns`<sup>Required</sup> <a name="userTurns" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurns"></a>

```typescript
public readonly userTurns: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---

##### `modelCallErrorsInput`<sup>Optional</sup> <a name="modelCallErrorsInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrorsInput"></a>

```typescript
public readonly modelCallErrorsInput: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---

##### `modelCallsInput`<sup>Optional</sup> <a name="modelCallsInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallsInput"></a>

```typescript
public readonly modelCallsInput: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---

##### `toolCallErrorsInput`<sup>Optional</sup> <a name="toolCallErrorsInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrorsInput"></a>

```typescript
public readonly toolCallErrorsInput: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---

##### `toolCallsInput`<sup>Optional</sup> <a name="toolCallsInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallsInput"></a>

```typescript
public readonly toolCallsInput: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---

##### `totalTokenUsageInput`<sup>Optional</sup> <a name="totalTokenUsageInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsageInput"></a>

```typescript
public readonly totalTokenUsageInput: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---

##### `userTurnsInput`<sup>Optional</sup> <a name="userTurnsInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurnsInput"></a>

```typescript
public readonly userTurnsInput: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger">putInactivityTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetInactivityTrigger">resetInactivityTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter"></a>

```typescript
public putFilter(value: IResolvable | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]

---

##### `putInactivityTrigger` <a name="putInactivityTrigger" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger"></a>

```typescript
public putInactivityTrigger(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetInactivityTrigger` <a name="resetInactivityTrigger" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetInactivityTrigger"></a>

```typescript
public resetInactivityTrigger(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTrigger">inactivityTrigger</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTriggerInput">inactivityTriggerInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filter"></a>

```typescript
public readonly filter: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList</a>

---

##### `inactivityTrigger`<sup>Required</sup> <a name="inactivityTrigger" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTrigger"></a>

```typescript
public readonly inactivityTrigger: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]

---

##### `inactivityTriggerInput`<sup>Optional</sup> <a name="inactivityTriggerInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTriggerInput"></a>

```typescript
public readonly inactivityTriggerInput: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get"></a>

```typescript
public get(index: number): GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration">putDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage">putTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetTotalTokenUsage">resetTotalTokenUsage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuration` <a name="putDuration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration"></a>

```typescript
public putDuration(value: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---

##### `putTotalTokenUsage` <a name="putTotalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage"></a>

```typescript
public putTotalTokenUsage(value: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetTotalTokenUsage` <a name="resetTotalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetTotalTokenUsage"></a>

```typescript
public resetTotalTokenUsage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsage">totalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.durationInput">durationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsageInput">totalTokenUsageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.duration"></a>

```typescript
public readonly duration: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference</a>

---

##### `totalTokenUsage`<sup>Required</sup> <a name="totalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsage"></a>

```typescript
public readonly totalTokenUsage: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---

##### `totalTokenUsageInput`<sup>Optional</sup> <a name="totalTokenUsageInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsageInput"></a>

```typescript
public readonly totalTokenUsageInput: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter"></a>

```typescript
public putFilter(value: IResolvable | GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filter"></a>

```typescript
public readonly filter: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---


### GoogleVertexAiOnlineEvaluatorConfigAOutputReference <a name="GoogleVertexAiOnlineEvaluatorConfigAOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling">putRandomSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resetMaxEvaluatedSamplesPerRun">resetMaxEvaluatedSamplesPerRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resetRandomSampling">resetRandomSampling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRandomSampling` <a name="putRandomSampling" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling"></a>

```typescript
public putRandomSampling(value: GoogleVertexAiOnlineEvaluatorConfigRandomSampling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a>

---

##### `resetMaxEvaluatedSamplesPerRun` <a name="resetMaxEvaluatedSamplesPerRun" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resetMaxEvaluatedSamplesPerRun"></a>

```typescript
public resetMaxEvaluatedSamplesPerRun(): void
```

##### `resetRandomSampling` <a name="resetRandomSampling" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resetRandomSampling"></a>

```typescript
public resetRandomSampling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.randomSampling">randomSampling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference">GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRunInput">maxEvaluatedSamplesPerRunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.randomSamplingInput">randomSamplingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRun">maxEvaluatedSamplesPerRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `randomSampling`<sup>Required</sup> <a name="randomSampling" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.randomSampling"></a>

```typescript
public readonly randomSampling: GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference">GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference</a>

---

##### `maxEvaluatedSamplesPerRunInput`<sup>Optional</sup> <a name="maxEvaluatedSamplesPerRunInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRunInput"></a>

```typescript
public readonly maxEvaluatedSamplesPerRunInput: string;
```

- *Type:* string

---

##### `randomSamplingInput`<sup>Optional</sup> <a name="randomSamplingInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.randomSamplingInput"></a>

```typescript
public readonly randomSamplingInput: GoogleVertexAiOnlineEvaluatorConfigRandomSampling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a>

---

##### `maxEvaluatedSamplesPerRun`<sup>Required</sup> <a name="maxEvaluatedSamplesPerRun" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRun"></a>

```typescript
public readonly maxEvaluatedSamplesPerRun: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorConfigA;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a>

---


### GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference <a name="GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorConfigRandomSampling;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a>

---


### GoogleVertexAiOnlineEvaluatorMetricSourcesList <a name="GoogleVertexAiOnlineEvaluatorMetricSourcesList" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.get"></a>

```typescript
public get(index: number): GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiOnlineEvaluatorMetricSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>[]

---


### GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference <a name="GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetricResourceName">resetMetricResourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetric` <a name="resetMetric" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetMetricResourceName` <a name="resetMetricResourceName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetricResourceName"></a>

```typescript
public resetMetricResourceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceNameInput">metricResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceName">metricResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `metricResourceNameInput`<sup>Optional</sup> <a name="metricResourceNameInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceNameInput"></a>

```typescript
public readonly metricResourceNameInput: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `metricResourceName`<sup>Required</sup> <a name="metricResourceName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceName"></a>

```typescript
public readonly metricResourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiOnlineEvaluatorMetricSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>

---


### GoogleVertexAiOnlineEvaluatorStateDetailsList <a name="GoogleVertexAiOnlineEvaluatorStateDetailsList" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.get"></a>

```typescript
public get(index: number): GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference <a name="GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetails">GoogleVertexAiOnlineEvaluatorStateDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiOnlineEvaluatorStateDetails;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetails">GoogleVertexAiOnlineEvaluatorStateDetails</a>

---


### GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference <a name="GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiOnlineEvaluator } from '@cdktn/provider-google-beta'

new googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiOnlineEvaluatorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a>

---



