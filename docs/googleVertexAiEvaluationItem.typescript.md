# `googleVertexAiEvaluationItem` Submodule <a name="`googleVertexAiEvaluationItem` Submodule" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiEvaluationItem <a name="GoogleVertexAiEvaluationItem" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item google_vertex_ai_evaluation_item}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem(scope: Construct, id: string, config: GoogleVertexAiEvaluationItemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig">GoogleVertexAiEvaluationItemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig">GoogleVertexAiEvaluationItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.putEvaluationRequest">putEvaluationRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetEvaluationRequest">resetEvaluationRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetGcsUri">resetGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEvaluationRequest` <a name="putEvaluationRequest" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.putEvaluationRequest"></a>

```typescript
public putEvaluationRequest(value: GoogleVertexAiEvaluationItemEvaluationRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.putEvaluationRequest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest">GoogleVertexAiEvaluationItemEvaluationRequest</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVertexAiEvaluationItemTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts">GoogleVertexAiEvaluationItemTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetEvaluationRequest` <a name="resetEvaluationRequest" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetEvaluationRequest"></a>

```typescript
public resetEvaluationRequest(): void
```

##### `resetGcsUri` <a name="resetGcsUri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetGcsUri"></a>

```typescript
public resetGcsUri(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiEvaluationItem resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isConstruct"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isTerraformElement"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isTerraformResource"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.generateConfigForImport"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleVertexAiEvaluationItem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiEvaluationItem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiEvaluationItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiEvaluationItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList">GoogleVertexAiEvaluationItemErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationRequest">evaluationRequest</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationResponse">evaluationResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList">GoogleVertexAiEvaluationItemEvaluationResponseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference">GoogleVertexAiEvaluationItemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationItemTypeInput">evaluationItemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationRequestInput">evaluationRequestInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest">GoogleVertexAiEvaluationItemEvaluationRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.gcsUriInput">gcsUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts">GoogleVertexAiEvaluationItemTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationItemType">evaluationItemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.gcsUri">gcsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.error"></a>

```typescript
public readonly error: GoogleVertexAiEvaluationItemErrorList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList">GoogleVertexAiEvaluationItemErrorList</a>

---

##### `evaluationRequest`<sup>Required</sup> <a name="evaluationRequest" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationRequest"></a>

```typescript
public readonly evaluationRequest: GoogleVertexAiEvaluationItemEvaluationRequestOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestOutputReference</a>

---

##### `evaluationResponse`<sup>Required</sup> <a name="evaluationResponse" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationResponse"></a>

```typescript
public readonly evaluationResponse: GoogleVertexAiEvaluationItemEvaluationResponseList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList">GoogleVertexAiEvaluationItemEvaluationResponseList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiEvaluationItemTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference">GoogleVertexAiEvaluationItemTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `evaluationItemTypeInput`<sup>Optional</sup> <a name="evaluationItemTypeInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationItemTypeInput"></a>

```typescript
public readonly evaluationItemTypeInput: string;
```

- *Type:* string

---

##### `evaluationRequestInput`<sup>Optional</sup> <a name="evaluationRequestInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationRequestInput"></a>

```typescript
public readonly evaluationRequestInput: GoogleVertexAiEvaluationItemEvaluationRequest;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest">GoogleVertexAiEvaluationItemEvaluationRequest</a>

---

##### `gcsUriInput`<sup>Optional</sup> <a name="gcsUriInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.gcsUriInput"></a>

```typescript
public readonly gcsUriInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVertexAiEvaluationItemTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts">GoogleVertexAiEvaluationItemTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `evaluationItemType`<sup>Required</sup> <a name="evaluationItemType" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationItemType"></a>

```typescript
public readonly evaluationItemType: string;
```

- *Type:* string

---

##### `gcsUri`<sup>Required</sup> <a name="gcsUri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.gcsUri"></a>

```typescript
public readonly gcsUri: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiEvaluationItemConfig <a name="GoogleVertexAiEvaluationItemConfig" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemConfig: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.displayName">displayName</a></code> | <code>string</code> | The user-friendly display name for the EvaluationItem. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.evaluationItemType">evaluationItemType</a></code> | <code>string</code> | The type of the EvaluationItem. Possible values: ["REQUEST", "RESULT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.region">region</a></code> | <code>string</code> | The region of the EvaluationItem. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.evaluationRequest">evaluationRequest</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest">GoogleVertexAiEvaluationItemEvaluationRequest</a></code> | evaluation_request block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.gcsUri">gcsUri</a></code> | <code>string</code> | The Cloud Storage object where the request or response is stored. Exactly one of 'evaluation_request' or 'gcs_uri' can be set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#id GoogleVertexAiEvaluationItem#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels for the EvaluationItem. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.metadata">metadata</a></code> | <code>string</code> | User-defined metadata for this evaluation item as a JSON string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#project GoogleVertexAiEvaluationItem#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts">GoogleVertexAiEvaluationItemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The user-friendly display name for the EvaluationItem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#display_name GoogleVertexAiEvaluationItem#display_name}

---

##### `evaluationItemType`<sup>Required</sup> <a name="evaluationItemType" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.evaluationItemType"></a>

```typescript
public readonly evaluationItemType: string;
```

- *Type:* string

The type of the EvaluationItem. Possible values: ["REQUEST", "RESULT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#evaluation_item_type GoogleVertexAiEvaluationItem#evaluation_item_type}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the EvaluationItem. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#region GoogleVertexAiEvaluationItem#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#deletion_policy GoogleVertexAiEvaluationItem#deletion_policy}

---

##### `evaluationRequest`<sup>Optional</sup> <a name="evaluationRequest" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.evaluationRequest"></a>

```typescript
public readonly evaluationRequest: GoogleVertexAiEvaluationItemEvaluationRequest;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest">GoogleVertexAiEvaluationItemEvaluationRequest</a>

evaluation_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#evaluation_request GoogleVertexAiEvaluationItem#evaluation_request}

---

##### `gcsUri`<sup>Optional</sup> <a name="gcsUri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.gcsUri"></a>

```typescript
public readonly gcsUri: string;
```

- *Type:* string

The Cloud Storage object where the request or response is stored. Exactly one of 'evaluation_request' or 'gcs_uri' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#gcs_uri GoogleVertexAiEvaluationItem#gcs_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#id GoogleVertexAiEvaluationItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels for the EvaluationItem.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#labels GoogleVertexAiEvaluationItem#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

User-defined metadata for this evaluation item as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#metadata GoogleVertexAiEvaluationItem#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#project GoogleVertexAiEvaluationItem#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiEvaluationItemTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts">GoogleVertexAiEvaluationItemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#timeouts GoogleVertexAiEvaluationItem#timeouts}

---

### GoogleVertexAiEvaluationItemError <a name="GoogleVertexAiEvaluationItemError" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemError.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemError: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemError = { ... }
```


### GoogleVertexAiEvaluationItemEvaluationRequest <a name="GoogleVertexAiEvaluationItemEvaluationRequest" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemEvaluationRequest: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.property.candidateResponses">candidateResponses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]</code> | candidate_responses block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.property.goldenResponse">goldenResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse</a></code> | golden_response block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt">GoogleVertexAiEvaluationItemEvaluationRequestPrompt</a></code> | prompt block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.property.rubrics">rubrics</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a>[]</code> | rubrics block. |

---

##### `candidateResponses`<sup>Optional</sup> <a name="candidateResponses" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.property.candidateResponses"></a>

```typescript
public readonly candidateResponses: IResolvable | GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]

candidate_responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#candidate_responses GoogleVertexAiEvaluationItem#candidate_responses}

---

##### `goldenResponse`<sup>Optional</sup> <a name="goldenResponse" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.property.goldenResponse"></a>

```typescript
public readonly goldenResponse: GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

golden_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#golden_response GoogleVertexAiEvaluationItem#golden_response}

---

##### `prompt`<sup>Optional</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.property.prompt"></a>

```typescript
public readonly prompt: GoogleVertexAiEvaluationItemEvaluationRequestPrompt;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt">GoogleVertexAiEvaluationItemEvaluationRequestPrompt</a>

prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#prompt GoogleVertexAiEvaluationItem#prompt}

---

##### `rubrics`<sup>Optional</sup> <a name="rubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.property.rubrics"></a>

```typescript
public readonly rubrics: IResolvable | GoogleVertexAiEvaluationItemEvaluationRequestRubrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a>[]

rubrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#rubrics GoogleVertexAiEvaluationItem#rubrics}

---

### GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses <a name="GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemEvaluationRequestCandidateResponses: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.property.candidate">candidate</a></code> | <code>string</code> | The name of the candidate that produced the response. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.property.agentData">agentData</a></code> | <code>string</code> | Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.property.text">text</a></code> | <code>string</code> | Text response. At most one of 'text', 'value', or 'agent_data' can be set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.property.value">value</a></code> | <code>string</code> | Fields and values that can be used to populate the response template, as a JSON string. |

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.property.candidate"></a>

```typescript
public readonly candidate: string;
```

- *Type:* string

The name of the candidate that produced the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#candidate GoogleVertexAiEvaluationItem#candidate}

---

##### `agentData`<sup>Optional</sup> <a name="agentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.property.agentData"></a>

```typescript
public readonly agentData: string;
```

- *Type:* string

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
field is used to provide the full output of an agent's run, including
all turns and events, for direct evaluation.
At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#agent_data GoogleVertexAiEvaluationItem#agent_data}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Text response. At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#text GoogleVertexAiEvaluationItem#text}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Fields and values that can be used to populate the response template, as a JSON string.

At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#value GoogleVertexAiEvaluationItem#value}

---

### GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError <a name="GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError = { ... }
```


### GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse <a name="GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemEvaluationRequestGoldenResponse: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.property.candidate">candidate</a></code> | <code>string</code> | The name of the candidate that produced the response. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.property.agentData">agentData</a></code> | <code>string</code> | Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.property.text">text</a></code> | <code>string</code> | Text response. At most one of 'text', 'value', or 'agent_data' can be set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.property.value">value</a></code> | <code>string</code> | Fields and values that can be used to populate the response template, as a JSON string. |

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.property.candidate"></a>

```typescript
public readonly candidate: string;
```

- *Type:* string

The name of the candidate that produced the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#candidate GoogleVertexAiEvaluationItem#candidate}

---

##### `agentData`<sup>Optional</sup> <a name="agentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.property.agentData"></a>

```typescript
public readonly agentData: string;
```

- *Type:* string

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
field is used to provide the full output of an agent's run, including
all turns and events, for direct evaluation.
At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#agent_data GoogleVertexAiEvaluationItem#agent_data}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Text response. At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#text GoogleVertexAiEvaluationItem#text}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Fields and values that can be used to populate the response template, as a JSON string.

At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#value GoogleVertexAiEvaluationItem#value}

---

### GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError <a name="GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemEvaluationRequestGoldenResponseError: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError = { ... }
```


### GoogleVertexAiEvaluationItemEvaluationRequestPrompt <a name="GoogleVertexAiEvaluationItemEvaluationRequestPrompt" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemEvaluationRequestPrompt: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.agentData">agentData</a></code> | <code>string</code> | Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.promptTemplateData">promptTemplateData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a></code> | prompt_template_data block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.text">text</a></code> | <code>string</code> | Text prompt. At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.userScenario">userScenario</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario</a></code> | user_scenario block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.value">value</a></code> | <code>string</code> | Fields and values that can be used to populate the prompt template, as a JSON string. |

---

##### `agentData`<sup>Optional</sup> <a name="agentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.agentData"></a>

```typescript
public readonly agentData: string;
```

- *Type:* string

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
serves as the input context for agent scraping.
At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#agent_data GoogleVertexAiEvaluationItem#agent_data}

---

##### `promptTemplateData`<sup>Optional</sup> <a name="promptTemplateData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.promptTemplateData"></a>

```typescript
public readonly promptTemplateData: GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

prompt_template_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#prompt_template_data GoogleVertexAiEvaluationItem#prompt_template_data}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Text prompt. At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#text GoogleVertexAiEvaluationItem#text}

---

##### `userScenario`<sup>Optional</sup> <a name="userScenario" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.userScenario"></a>

```typescript
public readonly userScenario: GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

user_scenario block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#user_scenario GoogleVertexAiEvaluationItem#user_scenario}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Fields and values that can be used to populate the prompt template, as a JSON string.

At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#value GoogleVertexAiEvaluationItem#value}

---

### GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData <a name="GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData.property.values">values</a></code> | <code>string</code> | The values for fields in the prompt template, as a JSON string mapping field names to Content objects. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData.property.values"></a>

```typescript
public readonly values: string;
```

- *Type:* string

The values for fields in the prompt template, as a JSON string mapping field names to Content objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#values GoogleVertexAiEvaluationItem#values}

---

### GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario <a name="GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemEvaluationRequestPromptUserScenario: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.conversationPlan">conversationPlan</a></code> | <code>string</code> | The plan for the conversation, used to drive the multi-turn agent run and generate the simulated agent evaluation dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.startingPrompt">startingPrompt</a></code> | <code>string</code> | The prompt that starts the conversation between the simulated user and the agent under test. |

---

##### `conversationPlan`<sup>Required</sup> <a name="conversationPlan" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.conversationPlan"></a>

```typescript
public readonly conversationPlan: string;
```

- *Type:* string

The plan for the conversation, used to drive the multi-turn agent run and generate the simulated agent evaluation dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#conversation_plan GoogleVertexAiEvaluationItem#conversation_plan}

---

##### `startingPrompt`<sup>Required</sup> <a name="startingPrompt" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.startingPrompt"></a>

```typescript
public readonly startingPrompt: string;
```

- *Type:* string

The prompt that starts the conversation between the simulated user and the agent under test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#starting_prompt GoogleVertexAiEvaluationItem#starting_prompt}

---

### GoogleVertexAiEvaluationItemEvaluationRequestRubrics <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemEvaluationRequestRubrics: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#name GoogleVertexAiEvaluationItem#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.property.displayName">displayName</a></code> | <code>string</code> | Human-readable name for the group. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.property.groupId">groupId</a></code> | <code>string</code> | Unique identifier for the group. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.property.rubrics">rubrics</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]</code> | rubrics block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#name GoogleVertexAiEvaluationItem#name}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#display_name GoogleVertexAiEvaluationItem#display_name}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Unique identifier for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#group_id GoogleVertexAiEvaluationItem#group_id}

---

##### `rubrics`<sup>Optional</sup> <a name="rubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.property.rubrics"></a>

```typescript
public readonly rubrics: IResolvable | GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]

rubrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#rubrics GoogleVertexAiEvaluationItem#rubrics}

---

### GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemEvaluationRequestRubricsRubrics: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.content">content</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a></code> | content block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.importance">importance</a></code> | <code>string</code> | The relative importance of this rubric. Possible values: ["HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.rubricId">rubricId</a></code> | <code>string</code> | Unique identifier for the rubric. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.type">type</a></code> | <code>string</code> | A type designator for the rubric, e.g. 'SUMMARIZATION_QUALITY'. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.content"></a>

```typescript
public readonly content: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#content GoogleVertexAiEvaluationItem#content}

---

##### `importance`<sup>Optional</sup> <a name="importance" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.importance"></a>

```typescript
public readonly importance: string;
```

- *Type:* string

The relative importance of this rubric. Possible values: ["HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#importance GoogleVertexAiEvaluationItem#importance}

---

##### `rubricId`<sup>Optional</sup> <a name="rubricId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.rubricId"></a>

```typescript
public readonly rubricId: string;
```

- *Type:* string

Unique identifier for the rubric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#rubric_id GoogleVertexAiEvaluationItem#rubric_id}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

A type designator for the rubric, e.g. 'SUMMARIZATION_QUALITY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#type GoogleVertexAiEvaluationItem#type}

---

### GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent.property.property">property</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a></code> | property block. |

---

##### `property`<sup>Optional</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent.property.property"></a>

```typescript
public readonly property: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#property GoogleVertexAiEvaluationItem#property}

---

### GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty.property.description">description</a></code> | <code>string</code> | Description of the property being evaluated. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the property being evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#description GoogleVertexAiEvaluationItem#description}

---

### GoogleVertexAiEvaluationItemEvaluationResponse <a name="GoogleVertexAiEvaluationItemEvaluationResponse" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponse.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemEvaluationResponse: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponse = { ... }
```


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemEvaluationResponseCandidateResults: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults = { ... }
```


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemEvaluationResponseCandidateResultsError: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError = { ... }
```


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts = { ... }
```


### GoogleVertexAiEvaluationItemTimeouts <a name="GoogleVertexAiEvaluationItemTimeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

const googleVertexAiEvaluationItemTimeouts: googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#create GoogleVertexAiEvaluationItem#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#delete GoogleVertexAiEvaluationItem#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#update GoogleVertexAiEvaluationItem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#create GoogleVertexAiEvaluationItem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#delete GoogleVertexAiEvaluationItem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#update GoogleVertexAiEvaluationItem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiEvaluationItemErrorList <a name="GoogleVertexAiEvaluationItemErrorList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.get"></a>

```typescript
public get(index: number): GoogleVertexAiEvaluationItemErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiEvaluationItemErrorOutputReference <a name="GoogleVertexAiEvaluationItemErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemError">GoogleVertexAiEvaluationItemError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiEvaluationItemError;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemError">GoogleVertexAiEvaluationItemError</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList <a name="GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.get"></a>

```typescript
public get(index: number): GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList <a name="GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.get"></a>

```typescript
public get(index: number): GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]

---


### GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetAgentData">resetAgentData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgentData` <a name="resetAgentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetAgentData"></a>

```typescript
public resetAgentData(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentDataInput">agentDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidateInput">candidateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentData">agentData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidate">candidate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.error"></a>

```typescript
public readonly error: GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList</a>

---

##### `agentDataInput`<sup>Optional</sup> <a name="agentDataInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentDataInput"></a>

```typescript
public readonly agentDataInput: string;
```

- *Type:* string

---

##### `candidateInput`<sup>Optional</sup> <a name="candidateInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidateInput"></a>

```typescript
public readonly candidateInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `agentData`<sup>Required</sup> <a name="agentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentData"></a>

```typescript
public readonly agentData: string;
```

- *Type:* string

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidate"></a>

```typescript
public readonly candidate: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList <a name="GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.get"></a>

```typescript
public get(index: number): GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetAgentData">resetAgentData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgentData` <a name="resetAgentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetAgentData"></a>

```typescript
public resetAgentData(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentDataInput">agentDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidateInput">candidateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentData">agentData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidate">candidate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.error"></a>

```typescript
public readonly error: GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList</a>

---

##### `agentDataInput`<sup>Optional</sup> <a name="agentDataInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentDataInput"></a>

```typescript
public readonly agentDataInput: string;
```

- *Type:* string

---

##### `candidateInput`<sup>Optional</sup> <a name="candidateInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidateInput"></a>

```typescript
public readonly candidateInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `agentData`<sup>Required</sup> <a name="agentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentData"></a>

```typescript
public readonly agentData: string;
```

- *Type:* string

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidate"></a>

```typescript
public readonly candidate: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putCandidateResponses">putCandidateResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse">putGoldenResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt">putPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putRubrics">putRubrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resetCandidateResponses">resetCandidateResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resetGoldenResponse">resetGoldenResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resetPrompt">resetPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resetRubrics">resetRubrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCandidateResponses` <a name="putCandidateResponses" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putCandidateResponses"></a>

```typescript
public putCandidateResponses(value: IResolvable | GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putCandidateResponses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]

---

##### `putGoldenResponse` <a name="putGoldenResponse" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse"></a>

```typescript
public putGoldenResponse(value: GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

---

##### `putPrompt` <a name="putPrompt" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt"></a>

```typescript
public putPrompt(value: GoogleVertexAiEvaluationItemEvaluationRequestPrompt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt">GoogleVertexAiEvaluationItemEvaluationRequestPrompt</a>

---

##### `putRubrics` <a name="putRubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putRubrics"></a>

```typescript
public putRubrics(value: IResolvable | GoogleVertexAiEvaluationItemEvaluationRequestRubrics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putRubrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a>[]

---

##### `resetCandidateResponses` <a name="resetCandidateResponses" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resetCandidateResponses"></a>

```typescript
public resetCandidateResponses(): void
```

##### `resetGoldenResponse` <a name="resetGoldenResponse" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resetGoldenResponse"></a>

```typescript
public resetGoldenResponse(): void
```

##### `resetPrompt` <a name="resetPrompt" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resetPrompt"></a>

```typescript
public resetPrompt(): void
```

##### `resetRubrics` <a name="resetRubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resetRubrics"></a>

```typescript
public resetRubrics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponses">candidateResponses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponse">goldenResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.rubrics">rubrics</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList">GoogleVertexAiEvaluationItemEvaluationRequestRubricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponsesInput">candidateResponsesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponseInput">goldenResponseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.promptInput">promptInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt">GoogleVertexAiEvaluationItemEvaluationRequestPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.rubricsInput">rubricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest">GoogleVertexAiEvaluationItemEvaluationRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `candidateResponses`<sup>Required</sup> <a name="candidateResponses" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponses"></a>

```typescript
public readonly candidateResponses: GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList</a>

---

##### `goldenResponse`<sup>Required</sup> <a name="goldenResponse" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponse"></a>

```typescript
public readonly goldenResponse: GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference</a>

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.prompt"></a>

```typescript
public readonly prompt: GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference</a>

---

##### `rubrics`<sup>Required</sup> <a name="rubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.rubrics"></a>

```typescript
public readonly rubrics: GoogleVertexAiEvaluationItemEvaluationRequestRubricsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList">GoogleVertexAiEvaluationItemEvaluationRequestRubricsList</a>

---

##### `candidateResponsesInput`<sup>Optional</sup> <a name="candidateResponsesInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponsesInput"></a>

```typescript
public readonly candidateResponsesInput: IResolvable | GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]

---

##### `goldenResponseInput`<sup>Optional</sup> <a name="goldenResponseInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponseInput"></a>

```typescript
public readonly goldenResponseInput: GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.promptInput"></a>

```typescript
public readonly promptInput: GoogleVertexAiEvaluationItemEvaluationRequestPrompt;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt">GoogleVertexAiEvaluationItemEvaluationRequestPrompt</a>

---

##### `rubricsInput`<sup>Optional</sup> <a name="rubricsInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.rubricsInput"></a>

```typescript
public readonly rubricsInput: IResolvable | GoogleVertexAiEvaluationItemEvaluationRequestRubrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiEvaluationItemEvaluationRequest;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest">GoogleVertexAiEvaluationItemEvaluationRequest</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.putPromptTemplateData">putPromptTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.putUserScenario">putUserScenario</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetAgentData">resetAgentData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetPromptTemplateData">resetPromptTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetUserScenario">resetUserScenario</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPromptTemplateData` <a name="putPromptTemplateData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.putPromptTemplateData"></a>

```typescript
public putPromptTemplateData(value: GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.putPromptTemplateData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

---

##### `putUserScenario` <a name="putUserScenario" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.putUserScenario"></a>

```typescript
public putUserScenario(value: GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.putUserScenario.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

---

##### `resetAgentData` <a name="resetAgentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetAgentData"></a>

```typescript
public resetAgentData(): void
```

##### `resetPromptTemplateData` <a name="resetPromptTemplateData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetPromptTemplateData"></a>

```typescript
public resetPromptTemplateData(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetUserScenario` <a name="resetUserScenario" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetUserScenario"></a>

```typescript
public resetUserScenario(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateData">promptTemplateData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenario">userScenario</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentDataInput">agentDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateDataInput">promptTemplateDataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenarioInput">userScenarioInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentData">agentData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt">GoogleVertexAiEvaluationItemEvaluationRequestPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `promptTemplateData`<sup>Required</sup> <a name="promptTemplateData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateData"></a>

```typescript
public readonly promptTemplateData: GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference</a>

---

##### `userScenario`<sup>Required</sup> <a name="userScenario" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenario"></a>

```typescript
public readonly userScenario: GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference</a>

---

##### `agentDataInput`<sup>Optional</sup> <a name="agentDataInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentDataInput"></a>

```typescript
public readonly agentDataInput: string;
```

- *Type:* string

---

##### `promptTemplateDataInput`<sup>Optional</sup> <a name="promptTemplateDataInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateDataInput"></a>

```typescript
public readonly promptTemplateDataInput: GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `userScenarioInput`<sup>Optional</sup> <a name="userScenarioInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenarioInput"></a>

```typescript
public readonly userScenarioInput: GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `agentData`<sup>Required</sup> <a name="agentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentData"></a>

```typescript
public readonly agentData: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiEvaluationItemEvaluationRequestPrompt;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt">GoogleVertexAiEvaluationItemEvaluationRequestPrompt</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.valuesInput">valuesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.values">values</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.values"></a>

```typescript
public readonly values: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlanInput">conversationPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPromptInput">startingPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlan">conversationPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPrompt">startingPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conversationPlanInput`<sup>Optional</sup> <a name="conversationPlanInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlanInput"></a>

```typescript
public readonly conversationPlanInput: string;
```

- *Type:* string

---

##### `startingPromptInput`<sup>Optional</sup> <a name="startingPromptInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPromptInput"></a>

```typescript
public readonly startingPromptInput: string;
```

- *Type:* string

---

##### `conversationPlan`<sup>Required</sup> <a name="conversationPlan" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlan"></a>

```typescript
public readonly conversationPlan: string;
```

- *Type:* string

---

##### `startingPrompt`<sup>Required</sup> <a name="startingPrompt" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPrompt"></a>

```typescript
public readonly startingPrompt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestRubricsList <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.get"></a>

```typescript
public get(index: number): GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiEvaluationItemEvaluationRequestRubrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a>[]

---


### GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.putRubrics">putRubrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetRubrics">resetRubrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRubrics` <a name="putRubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.putRubrics"></a>

```typescript
public putRubrics(value: IResolvable | GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.putRubrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetRubrics` <a name="resetRubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetRubrics"></a>

```typescript
public resetRubrics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubrics">rubrics</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubricsInput">rubricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rubrics`<sup>Required</sup> <a name="rubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubrics"></a>

```typescript
public readonly rubrics: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rubricsInput`<sup>Optional</sup> <a name="rubricsInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubricsInput"></a>

```typescript
public readonly rubricsInput: IResolvable | GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiEvaluationItemEvaluationRequestRubrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.putProperty">putProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resetProperty">resetProperty</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperty` <a name="putProperty" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.putProperty"></a>

```typescript
public putProperty(value: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.putProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

---

##### `resetProperty` <a name="resetProperty" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resetProperty"></a>

```typescript
public resetProperty(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.property">property</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.propertyInput">propertyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.property"></a>

```typescript
public readonly property: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference</a>

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.propertyInput"></a>

```typescript
public readonly propertyInput: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.get"></a>

```typescript
public get(index: number): GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]

---


### GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetImportance">resetImportance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetRubricId">resetRubricId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContent` <a name="putContent" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.putContent"></a>

```typescript
public putContent(value: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

---

##### `resetImportance` <a name="resetImportance" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetImportance"></a>

```typescript
public resetImportance(): void
```

##### `resetRubricId` <a name="resetRubricId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetRubricId"></a>

```typescript
public resetRubricId(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.content">content</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.contentInput">contentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importanceInput">importanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricIdInput">rubricIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importance">importance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricId">rubricId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.content"></a>

```typescript
public readonly content: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

---

##### `importanceInput`<sup>Optional</sup> <a name="importanceInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importanceInput"></a>

```typescript
public readonly importanceInput: string;
```

- *Type:* string

---

##### `rubricIdInput`<sup>Optional</sup> <a name="rubricIdInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricIdInput"></a>

```typescript
public readonly rubricIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `importance`<sup>Required</sup> <a name="importance" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importance"></a>

```typescript
public readonly importance: string;
```

- *Type:* string

---

##### `rubricId`<sup>Required</sup> <a name="rubricId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricId"></a>

```typescript
public readonly rubricId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>

---


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.get"></a>

```typescript
public get(index: number): GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError</a>

---


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.get"></a>

```typescript
public get(index: number): GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.additionalResults">additionalResults</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.candidate">candidate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.explanation">explanation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.rubricVerdicts">rubricVerdicts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.score">score</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalResults`<sup>Required</sup> <a name="additionalResults" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.additionalResults"></a>

```typescript
public readonly additionalResults: string;
```

- *Type:* string

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.candidate"></a>

```typescript
public readonly candidate: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.error"></a>

```typescript
public readonly error: GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList</a>

---

##### `explanation`<sup>Required</sup> <a name="explanation" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.explanation"></a>

```typescript
public readonly explanation: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `rubricVerdicts`<sup>Required</sup> <a name="rubricVerdicts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.rubricVerdicts"></a>

```typescript
public readonly rubricVerdicts: GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList</a>

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.score"></a>

```typescript
public readonly score: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults</a>

---


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.get"></a>

```typescript
public get(index: number): GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.evaluatedRubric">evaluatedRubric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.reasoning">reasoning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.verdict">verdict</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluatedRubric`<sup>Required</sup> <a name="evaluatedRubric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.evaluatedRubric"></a>

```typescript
public readonly evaluatedRubric: string;
```

- *Type:* string

---

##### `reasoning`<sup>Required</sup> <a name="reasoning" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.reasoning"></a>

```typescript
public readonly reasoning: string;
```

- *Type:* string

---

##### `verdict`<sup>Required</sup> <a name="verdict" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.verdict"></a>

```typescript
public readonly verdict: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts</a>

---


### GoogleVertexAiEvaluationItemEvaluationResponseList <a name="GoogleVertexAiEvaluationItemEvaluationResponseList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.get"></a>

```typescript
public get(index: number): GoogleVertexAiEvaluationItemEvaluationResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiEvaluationItemEvaluationResponseOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationResponseOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.candidateResults">candidateResults</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRequest">evaluationRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRun">evaluationRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.request">request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponse">GoogleVertexAiEvaluationItemEvaluationResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `candidateResults`<sup>Required</sup> <a name="candidateResults" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.candidateResults"></a>

```typescript
public readonly candidateResults: GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList</a>

---

##### `evaluationRequest`<sup>Required</sup> <a name="evaluationRequest" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRequest"></a>

```typescript
public readonly evaluationRequest: string;
```

- *Type:* string

---

##### `evaluationRun`<sup>Required</sup> <a name="evaluationRun" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRun"></a>

```typescript
public readonly evaluationRun: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiEvaluationItemEvaluationResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponse">GoogleVertexAiEvaluationItemEvaluationResponse</a>

---


### GoogleVertexAiEvaluationItemTimeoutsOutputReference <a name="GoogleVertexAiEvaluationItemTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiEvaluationItem } from '@cdktn/provider-google-beta'

new googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts">GoogleVertexAiEvaluationItemTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiEvaluationItemTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts">GoogleVertexAiEvaluationItemTimeouts</a>

---



