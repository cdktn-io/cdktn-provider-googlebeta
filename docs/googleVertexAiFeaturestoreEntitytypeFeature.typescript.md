# `googleVertexAiFeaturestoreEntitytypeFeature` Submodule <a name="`googleVertexAiFeaturestoreEntitytypeFeature` Submodule" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeaturestoreEntitytypeFeature <a name="GoogleVertexAiFeaturestoreEntitytypeFeature" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature google_vertex_ai_featurestore_entitytype_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytypeFeature } from '@cdktn/provider-google-beta'

new googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature(scope: Construct, id: string, config: GoogleVertexAiFeaturestoreEntitytypeFeatureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig">GoogleVertexAiFeaturestoreEntitytypeFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig">GoogleVertexAiFeaturestoreEntitytypeFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiFeaturestoreEntitytypeFeature resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isConstruct"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytypeFeature } from '@cdktn/provider-google-beta'

googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformElement"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytypeFeature } from '@cdktn/provider-google-beta'

googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformResource"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytypeFeature } from '@cdktn/provider-google-beta'

googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytypeFeature } from '@cdktn/provider-google-beta'

googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleVertexAiFeaturestoreEntitytypeFeature resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiFeaturestoreEntitytypeFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiFeaturestoreEntitytypeFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeaturestoreEntitytypeFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.entitytypeInput">entitytypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.entitytype">entitytype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `entitytypeInput`<sup>Optional</sup> <a name="entitytypeInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.entitytypeInput"></a>

```typescript
public readonly entitytypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `entitytype`<sup>Required</sup> <a name="entitytype" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.entitytype"></a>

```typescript
public readonly entitytype: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeaturestoreEntitytypeFeatureConfig <a name="GoogleVertexAiFeaturestoreEntitytypeFeatureConfig" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytypeFeature } from '@cdktn/provider-google-beta'

const googleVertexAiFeaturestoreEntitytypeFeatureConfig: googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.entitytype">entitytype</a></code> | <code>string</code> | The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.valueType">valueType</a></code> | <code>string</code> | Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.description">description</a></code> | <code>string</code> | Description of the feature. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#id GoogleVertexAiFeaturestoreEntitytypeFeature#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to the feature. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.name">name</a></code> | <code>string</code> | The name of the feature. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `entitytype`<sup>Required</sup> <a name="entitytype" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.entitytype"></a>

```typescript
public readonly entitytype: string;
```

- *Type:* string

The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#entitytype GoogleVertexAiFeaturestoreEntitytypeFeature#entitytype}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#value_type GoogleVertexAiFeaturestoreEntitytypeFeature#value_type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#deletion_policy GoogleVertexAiFeaturestoreEntitytypeFeature#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#description GoogleVertexAiFeaturestoreEntitytypeFeature#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#id GoogleVertexAiFeaturestoreEntitytypeFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to the feature.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#labels GoogleVertexAiFeaturestoreEntitytypeFeature#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the feature.

The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#name GoogleVertexAiFeaturestoreEntitytypeFeature#name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#timeouts GoogleVertexAiFeaturestoreEntitytypeFeature#timeouts}

---

### GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts <a name="GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytypeFeature } from '@cdktn/provider-google-beta'

const googleVertexAiFeaturestoreEntitytypeFeatureTimeouts: googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#create GoogleVertexAiFeaturestoreEntitytypeFeature#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#delete GoogleVertexAiFeaturestoreEntitytypeFeature#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#update GoogleVertexAiFeaturestoreEntitytypeFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#create GoogleVertexAiFeaturestoreEntitytypeFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#delete GoogleVertexAiFeaturestoreEntitytypeFeature#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#update GoogleVertexAiFeaturestoreEntitytypeFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference <a name="GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytypeFeature } from '@cdktn/provider-google-beta'

new googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

---



