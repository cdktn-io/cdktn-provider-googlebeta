# `googleVertexAiRagCorpus` Submodule <a name="`googleVertexAiRagCorpus` Submodule" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiRagCorpus <a name="GoogleVertexAiRagCorpus" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus google_vertex_ai_rag_corpus}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

new googleVertexAiRagCorpus.GoogleVertexAiRagCorpus(scope: Construct, id: string, config: GoogleVertexAiRagCorpusConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig">GoogleVertexAiRagCorpusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig">GoogleVertexAiRagCorpusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVectorDbConfig">putVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVertexAiSearchConfig">putVertexAiSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetVectorDbConfig">resetVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetVertexAiSearchConfig">resetVertexAiSearchConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putEncryptionSpec"></a>

```typescript
public putEncryptionSpec(value: GoogleVertexAiRagCorpusEncryptionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVertexAiRagCorpusTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a>

---

##### `putVectorDbConfig` <a name="putVectorDbConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVectorDbConfig"></a>

```typescript
public putVectorDbConfig(value: GoogleVertexAiRagCorpusVectorDbConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVectorDbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a>

---

##### `putVertexAiSearchConfig` <a name="putVertexAiSearchConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVertexAiSearchConfig"></a>

```typescript
public putVertexAiSearchConfig(value: GoogleVertexAiRagCorpusVertexAiSearchConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVertexAiSearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetEncryptionSpec"></a>

```typescript
public resetEncryptionSpec(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVectorDbConfig` <a name="resetVectorDbConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetVectorDbConfig"></a>

```typescript
public resetVectorDbConfig(): void
```

##### `resetVertexAiSearchConfig` <a name="resetVertexAiSearchConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetVertexAiSearchConfig"></a>

```typescript
public resetVertexAiSearchConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiRagCorpus resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isConstruct"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformElement"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformResource"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleVertexAiRagCorpus resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiRagCorpus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiRagCorpus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiRagCorpus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.corpusStatus">corpusStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList">GoogleVertexAiRagCorpusCorpusStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference">GoogleVertexAiRagCorpusEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference">GoogleVertexAiRagCorpusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vectorDbConfig">vectorDbConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vertexAiSearchConfig">vertexAiSearchConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference">GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vectorDbConfigInput">vectorDbConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vertexAiSearchConfigInput">vertexAiSearchConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `corpusStatus`<sup>Required</sup> <a name="corpusStatus" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.corpusStatus"></a>

```typescript
public readonly corpusStatus: GoogleVertexAiRagCorpusCorpusStatusList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList">GoogleVertexAiRagCorpusCorpusStatusList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: GoogleVertexAiRagCorpusEncryptionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference">GoogleVertexAiRagCorpusEncryptionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiRagCorpusTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference">GoogleVertexAiRagCorpusTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `vectorDbConfig`<sup>Required</sup> <a name="vectorDbConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vectorDbConfig"></a>

```typescript
public readonly vectorDbConfig: GoogleVertexAiRagCorpusVectorDbConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigOutputReference</a>

---

##### `vertexAiSearchConfig`<sup>Required</sup> <a name="vertexAiSearchConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vertexAiSearchConfig"></a>

```typescript
public readonly vertexAiSearchConfig: GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference">GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.encryptionSpecInput"></a>

```typescript
public readonly encryptionSpecInput: GoogleVertexAiRagCorpusEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVertexAiRagCorpusTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a>

---

##### `vectorDbConfigInput`<sup>Optional</sup> <a name="vectorDbConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vectorDbConfigInput"></a>

```typescript
public readonly vectorDbConfigInput: GoogleVertexAiRagCorpusVectorDbConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a>

---

##### `vertexAiSearchConfigInput`<sup>Optional</sup> <a name="vertexAiSearchConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vertexAiSearchConfigInput"></a>

```typescript
public readonly vertexAiSearchConfigInput: GoogleVertexAiRagCorpusVertexAiSearchConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiRagCorpusConfig <a name="GoogleVertexAiRagCorpusConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

const googleVertexAiRagCorpusConfig: googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.displayName">displayName</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.region">region</a></code> | <code>string</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.description">description</a></code> | <code>string</code> | Optional. The description of the RagCorpus. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#id GoogleVertexAiRagCorpus#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#project GoogleVertexAiRagCorpus#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.vectorDbConfig">vectorDbConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a></code> | vector_db_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.vertexAiSearchConfig">vertexAiSearchConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a></code> | vertex_ai_search_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Required.

The display name of the RagCorpus. The name can be up to 128
characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#display_name GoogleVertexAiRagCorpus#display_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#region GoogleVertexAiRagCorpus#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#deletion_policy GoogleVertexAiRagCorpus#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. The description of the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#description GoogleVertexAiRagCorpus#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: GoogleVertexAiRagCorpusEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#encryption_spec GoogleVertexAiRagCorpus#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#id GoogleVertexAiRagCorpus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#project GoogleVertexAiRagCorpus#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiRagCorpusTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#timeouts GoogleVertexAiRagCorpus#timeouts}

---

##### `vectorDbConfig`<sup>Optional</sup> <a name="vectorDbConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.vectorDbConfig"></a>

```typescript
public readonly vectorDbConfig: GoogleVertexAiRagCorpusVectorDbConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a>

vector_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vector_db_config GoogleVertexAiRagCorpus#vector_db_config}

---

##### `vertexAiSearchConfig`<sup>Optional</sup> <a name="vertexAiSearchConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.vertexAiSearchConfig"></a>

```typescript
public readonly vertexAiSearchConfig: GoogleVertexAiRagCorpusVertexAiSearchConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a>

vertex_ai_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vertex_ai_search_config GoogleVertexAiRagCorpus#vertex_ai_search_config}

---

### GoogleVertexAiRagCorpusCorpusStatus <a name="GoogleVertexAiRagCorpusCorpusStatus" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

const googleVertexAiRagCorpusCorpusStatus: googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus = { ... }
```


### GoogleVertexAiRagCorpusEncryptionSpec <a name="GoogleVertexAiRagCorpusEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

const googleVertexAiRagCorpusEncryptionSpec: googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Required. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Required.

The Cloud KMS resource identifier of the customer managed
encryption key used to protect the resource. Has the form:
projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
The key needs to be in the same region as where the resource is
created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#kms_key_name GoogleVertexAiRagCorpus#kms_key_name}

---

### GoogleVertexAiRagCorpusTimeouts <a name="GoogleVertexAiRagCorpusTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

const googleVertexAiRagCorpusTimeouts: googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#create GoogleVertexAiRagCorpus#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#delete GoogleVertexAiRagCorpus#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#update GoogleVertexAiRagCorpus#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#create GoogleVertexAiRagCorpus#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#delete GoogleVertexAiRagCorpus#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#update GoogleVertexAiRagCorpus#update}.

---

### GoogleVertexAiRagCorpusVectorDbConfig <a name="GoogleVertexAiRagCorpusVectorDbConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

const googleVertexAiRagCorpusVectorDbConfig: googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.apiAuth">apiAuth</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a></code> | api_auth block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.pinecone">pinecone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a></code> | pinecone block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig">ragEmbeddingModelConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | rag_embedding_model_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.ragManagedDb">ragManagedDb</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | rag_managed_db block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch">vertexVectorSearch</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | vertex_vector_search block. |

---

##### `apiAuth`<sup>Optional</sup> <a name="apiAuth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.apiAuth"></a>

```typescript
public readonly apiAuth: GoogleVertexAiRagCorpusVectorDbConfigApiAuth;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a>

api_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_auth GoogleVertexAiRagCorpus#api_auth}

---

##### `pinecone`<sup>Optional</sup> <a name="pinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.pinecone"></a>

```typescript
public readonly pinecone: GoogleVertexAiRagCorpusVectorDbConfigPinecone;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a>

pinecone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#pinecone GoogleVertexAiRagCorpus#pinecone}

---

##### `ragEmbeddingModelConfig`<sup>Optional</sup> <a name="ragEmbeddingModelConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig"></a>

```typescript
public readonly ragEmbeddingModelConfig: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

rag_embedding_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#rag_embedding_model_config GoogleVertexAiRagCorpus#rag_embedding_model_config}

---

##### `ragManagedDb`<sup>Optional</sup> <a name="ragManagedDb" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.ragManagedDb"></a>

```typescript
public readonly ragManagedDb: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a>

rag_managed_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#rag_managed_db GoogleVertexAiRagCorpus#rag_managed_db}

---

##### `vertexVectorSearch`<sup>Optional</sup> <a name="vertexVectorSearch" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch"></a>

```typescript
public readonly vertexVectorSearch: GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

vertex_vector_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vertex_vector_search GoogleVertexAiRagCorpus#vertex_vector_search}

---

### GoogleVertexAiRagCorpusVectorDbConfigApiAuth <a name="GoogleVertexAiRagCorpusVectorDbConfigApiAuth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

const googleVertexAiRagCorpusVectorDbConfigApiAuth: googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | api_key_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_key_config GoogleVertexAiRagCorpus#api_key_config}

---

### GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig <a name="GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

const googleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig: googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>string</code> | The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString">apiKeyString</a></code> | <code>string</code> | The API key string. |

---

##### `apiKeySecretVersion`<sup>Optional</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion"></a>

```typescript
public readonly apiKeySecretVersion: string;
```

- *Type:* string

The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_key_secret_version GoogleVertexAiRagCorpus#api_key_secret_version}

---

##### `apiKeyString`<sup>Optional</sup> <a name="apiKeyString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString"></a>

```typescript
public readonly apiKeyString: string;
```

- *Type:* string

The API key string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_key_string GoogleVertexAiRagCorpus#api_key_string}

---

### GoogleVertexAiRagCorpusVectorDbConfigPinecone <a name="GoogleVertexAiRagCorpusVectorDbConfigPinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

const googleVertexAiRagCorpusVectorDbConfigPinecone: googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone.property.indexName">indexName</a></code> | <code>string</code> | Pinecone index name. This value cannot be changed after it's set. |

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

Pinecone index name. This value cannot be changed after it's set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#index_name GoogleVertexAiRagCorpus#index_name}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig <a name="GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

const googleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig: googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint">vertexPredictionEndpoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | vertex_prediction_endpoint block. |

---

##### `vertexPredictionEndpoint`<sup>Optional</sup> <a name="vertexPredictionEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint"></a>

```typescript
public readonly vertexPredictionEndpoint: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

vertex_prediction_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vertex_prediction_endpoint GoogleVertexAiRagCorpus#vertex_prediction_endpoint}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint <a name="GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

const googleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint: googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint">endpoint</a></code> | <code>string</code> | Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#endpoint GoogleVertexAiRagCorpus#endpoint}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

const googleVertexAiRagCorpusVectorDbConfigRagManagedDb: googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann">ann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | ann block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn">knn</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | knn block. |

---

##### `ann`<sup>Optional</sup> <a name="ann" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann"></a>

```typescript
public readonly ann: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

ann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#ann GoogleVertexAiRagCorpus#ann}

---

##### `knn`<sup>Optional</sup> <a name="knn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn"></a>

```typescript
public readonly knn: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

knn block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#knn GoogleVertexAiRagCorpus#knn}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

const googleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn: googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount">leafCount</a></code> | <code>number</code> | Number of leaf nodes in the tree-based structure. Default value is 500. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth">treeDepth</a></code> | <code>number</code> | The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2. |

---

##### `leafCount`<sup>Optional</sup> <a name="leafCount" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount"></a>

```typescript
public readonly leafCount: number;
```

- *Type:* number

Number of leaf nodes in the tree-based structure. Default value is 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#leaf_count GoogleVertexAiRagCorpus#leaf_count}

---

##### `treeDepth`<sup>Optional</sup> <a name="treeDepth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth"></a>

```typescript
public readonly treeDepth: number;
```

- *Type:* number

The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#tree_depth GoogleVertexAiRagCorpus#tree_depth}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

const googleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn: googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn = { ... }
```


### GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch <a name="GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

const googleVertexAiRagCorpusVectorDbConfigVertexVectorSearch: googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index">index</a></code> | <code>string</code> | The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint">indexEndpoint</a></code> | <code>string</code> | The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#index GoogleVertexAiRagCorpus#index}

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint"></a>

```typescript
public readonly indexEndpoint: string;
```

- *Type:* string

The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#index_endpoint GoogleVertexAiRagCorpus#index_endpoint}

---

### GoogleVertexAiRagCorpusVertexAiSearchConfig <a name="GoogleVertexAiRagCorpusVertexAiSearchConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

const googleVertexAiRagCorpusVertexAiSearchConfig: googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig.property.servingConfig">servingConfig</a></code> | <code>string</code> | Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}. |

---

##### `servingConfig`<sup>Required</sup> <a name="servingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig.property.servingConfig"></a>

```typescript
public readonly servingConfig: string;
```

- *Type:* string

Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#serving_config GoogleVertexAiRagCorpus#serving_config}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiRagCorpusCorpusStatusList <a name="GoogleVertexAiRagCorpusCorpusStatusList" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

new googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.get"></a>

```typescript
public get(index: number): GoogleVertexAiRagCorpusCorpusStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleVertexAiRagCorpusCorpusStatusOutputReference <a name="GoogleVertexAiRagCorpusCorpusStatusOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

new googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus">errorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus">GoogleVertexAiRagCorpusCorpusStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorStatus`<sup>Required</sup> <a name="errorStatus" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus"></a>

```typescript
public readonly errorStatus: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagCorpusCorpusStatus;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus">GoogleVertexAiRagCorpusCorpusStatus</a>

---


### GoogleVertexAiRagCorpusEncryptionSpecOutputReference <a name="GoogleVertexAiRagCorpusEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

new googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagCorpusEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a>

---


### GoogleVertexAiRagCorpusTimeoutsOutputReference <a name="GoogleVertexAiRagCorpusTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

new googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiRagCorpusTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

new googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion">resetApiKeySecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString">resetApiKeyString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKeySecretVersion` <a name="resetApiKeySecretVersion" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion"></a>

```typescript
public resetApiKeySecretVersion(): void
```

##### `resetApiKeyString` <a name="resetApiKeyString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString"></a>

```typescript
public resetApiKeyString(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput">apiKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput">apiKeyStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString">apiKeyString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeySecretVersionInput`<sup>Optional</sup> <a name="apiKeySecretVersionInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```typescript
public readonly apiKeySecretVersionInput: string;
```

- *Type:* string

---

##### `apiKeyStringInput`<sup>Optional</sup> <a name="apiKeyStringInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput"></a>

```typescript
public readonly apiKeyStringInput: string;
```

- *Type:* string

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```typescript
public readonly apiKeySecretVersion: string;
```

- *Type:* string

---

##### `apiKeyString`<sup>Required</sup> <a name="apiKeyString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString"></a>

```typescript
public readonly apiKeyString: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

new googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig"></a>

```typescript
public putApiKeyConfig(value: GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig"></a>

```typescript
public resetApiKeyConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput"></a>

```typescript
public readonly apiKeyConfigInput: GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagCorpusVectorDbConfigApiAuth;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

new googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth">putApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putPinecone">putPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig">putRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb">putRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch">putVertexVectorSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth">resetApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone">resetPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig">resetRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb">resetRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch">resetVertexVectorSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiAuth` <a name="putApiAuth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth"></a>

```typescript
public putApiAuth(value: GoogleVertexAiRagCorpusVectorDbConfigApiAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a>

---

##### `putPinecone` <a name="putPinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putPinecone"></a>

```typescript
public putPinecone(value: GoogleVertexAiRagCorpusVectorDbConfigPinecone): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putPinecone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a>

---

##### `putRagEmbeddingModelConfig` <a name="putRagEmbeddingModelConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig"></a>

```typescript
public putRagEmbeddingModelConfig(value: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---

##### `putRagManagedDb` <a name="putRagManagedDb" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb"></a>

```typescript
public putRagManagedDb(value: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---

##### `putVertexVectorSearch` <a name="putVertexVectorSearch" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch"></a>

```typescript
public putVertexVectorSearch(value: GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---

##### `resetApiAuth` <a name="resetApiAuth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth"></a>

```typescript
public resetApiAuth(): void
```

##### `resetPinecone` <a name="resetPinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone"></a>

```typescript
public resetPinecone(): void
```

##### `resetRagEmbeddingModelConfig` <a name="resetRagEmbeddingModelConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig"></a>

```typescript
public resetRagEmbeddingModelConfig(): void
```

##### `resetRagManagedDb` <a name="resetRagManagedDb" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb"></a>

```typescript
public resetRagManagedDb(): void
```

##### `resetVertexVectorSearch` <a name="resetVertexVectorSearch" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch"></a>

```typescript
public resetVertexVectorSearch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth">apiAuth</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference">GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone">pinecone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference">GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig">ragEmbeddingModelConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb">ragManagedDb</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch">vertexVectorSearch</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput">apiAuthInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput">pineconeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput">ragEmbeddingModelConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput">ragManagedDbInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput">vertexVectorSearchInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiAuth`<sup>Required</sup> <a name="apiAuth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth"></a>

```typescript
public readonly apiAuth: GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference">GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a>

---

##### `pinecone`<sup>Required</sup> <a name="pinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone"></a>

```typescript
public readonly pinecone: GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference">GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference</a>

---

##### `ragEmbeddingModelConfig`<sup>Required</sup> <a name="ragEmbeddingModelConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig"></a>

```typescript
public readonly ragEmbeddingModelConfig: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a>

---

##### `ragManagedDb`<sup>Required</sup> <a name="ragManagedDb" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb"></a>

```typescript
public readonly ragManagedDb: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a>

---

##### `vertexVectorSearch`<sup>Required</sup> <a name="vertexVectorSearch" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch"></a>

```typescript
public readonly vertexVectorSearch: GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a>

---

##### `apiAuthInput`<sup>Optional</sup> <a name="apiAuthInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput"></a>

```typescript
public readonly apiAuthInput: GoogleVertexAiRagCorpusVectorDbConfigApiAuth;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a>

---

##### `pineconeInput`<sup>Optional</sup> <a name="pineconeInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput"></a>

```typescript
public readonly pineconeInput: GoogleVertexAiRagCorpusVectorDbConfigPinecone;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a>

---

##### `ragEmbeddingModelConfigInput`<sup>Optional</sup> <a name="ragEmbeddingModelConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput"></a>

```typescript
public readonly ragEmbeddingModelConfigInput: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---

##### `ragManagedDbInput`<sup>Optional</sup> <a name="ragManagedDbInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput"></a>

```typescript
public readonly ragManagedDbInput: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---

##### `vertexVectorSearchInput`<sup>Optional</sup> <a name="vertexVectorSearchInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput"></a>

```typescript
public readonly vertexVectorSearchInput: GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagCorpusVectorDbConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

new googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput"></a>

```typescript
public readonly indexNameInput: string;
```

- *Type:* string

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagCorpusVectorDbConfigPinecone;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

new googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint">putVertexPredictionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint">resetVertexPredictionEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVertexPredictionEndpoint` <a name="putVertexPredictionEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint"></a>

```typescript
public putVertexPredictionEndpoint(value: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---

##### `resetVertexPredictionEndpoint` <a name="resetVertexPredictionEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint"></a>

```typescript
public resetVertexPredictionEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint">vertexPredictionEndpoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput">vertexPredictionEndpointInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vertexPredictionEndpoint`<sup>Required</sup> <a name="vertexPredictionEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint"></a>

```typescript
public readonly vertexPredictionEndpoint: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a>

---

##### `vertexPredictionEndpointInput`<sup>Optional</sup> <a name="vertexPredictionEndpointInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput"></a>

```typescript
public readonly vertexPredictionEndpointInput: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

new googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId">modelVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `modelVersionId`<sup>Required</sup> <a name="modelVersionId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId"></a>

```typescript
public readonly modelVersionId: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

new googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount">resetLeafCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth">resetTreeDepth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLeafCount` <a name="resetLeafCount" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount"></a>

```typescript
public resetLeafCount(): void
```

##### `resetTreeDepth` <a name="resetTreeDepth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth"></a>

```typescript
public resetTreeDepth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput">leafCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput">treeDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount">leafCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth">treeDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `leafCountInput`<sup>Optional</sup> <a name="leafCountInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput"></a>

```typescript
public readonly leafCountInput: number;
```

- *Type:* number

---

##### `treeDepthInput`<sup>Optional</sup> <a name="treeDepthInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput"></a>

```typescript
public readonly treeDepthInput: number;
```

- *Type:* number

---

##### `leafCount`<sup>Required</sup> <a name="leafCount" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount"></a>

```typescript
public readonly leafCount: number;
```

- *Type:* number

---

##### `treeDepth`<sup>Required</sup> <a name="treeDepth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth"></a>

```typescript
public readonly treeDepth: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

new googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

new googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn">putAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn">putKnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn">resetAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn">resetKnn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnn` <a name="putAnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn"></a>

```typescript
public putAnn(value: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---

##### `putKnn` <a name="putKnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn"></a>

```typescript
public putKnn(value: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---

##### `resetAnn` <a name="resetAnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn"></a>

```typescript
public resetAnn(): void
```

##### `resetKnn` <a name="resetKnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn"></a>

```typescript
public resetKnn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann">ann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn">knn</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput">annInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput">knnInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ann`<sup>Required</sup> <a name="ann" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann"></a>

```typescript
public readonly ann: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a>

---

##### `knn`<sup>Required</sup> <a name="knn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn"></a>

```typescript
public readonly knn: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a>

---

##### `annInput`<sup>Optional</sup> <a name="annInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput"></a>

```typescript
public readonly annInput: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---

##### `knnInput`<sup>Optional</sup> <a name="knnInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput"></a>

```typescript
public readonly knnInput: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

new googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput">indexEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput">indexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint">indexEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexEndpointInput`<sup>Optional</sup> <a name="indexEndpointInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput"></a>

```typescript
public readonly indexEndpointInput: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput"></a>

```typescript
public readonly indexInput: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint"></a>

```typescript
public readonly indexEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---


### GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference <a name="GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagCorpus } from '@cdktn/provider-google-beta'

new googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput">servingConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig">servingConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `servingConfigInput`<sup>Optional</sup> <a name="servingConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput"></a>

```typescript
public readonly servingConfigInput: string;
```

- *Type:* string

---

##### `servingConfig`<sup>Required</sup> <a name="servingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig"></a>

```typescript
public readonly servingConfig: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagCorpusVertexAiSearchConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a>

---



