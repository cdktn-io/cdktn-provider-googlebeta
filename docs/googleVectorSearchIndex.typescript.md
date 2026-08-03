# `googleVectorSearchIndex` Submodule <a name="`googleVectorSearchIndex` Submodule" id="@cdktn/provider-google-beta.googleVectorSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVectorSearchIndex <a name="GoogleVectorSearchIndex" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index google_vector_search_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer"></a>

```typescript
import { googleVectorSearchIndex } from '@cdktn/provider-google-beta'

new googleVectorSearchIndex.GoogleVectorSearchIndex(scope: Construct, id: string, config: GoogleVectorSearchIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig">GoogleVectorSearchIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig">GoogleVectorSearchIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDedicatedInfrastructure">putDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDenseScann">putDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDedicatedInfrastructure">resetDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDenseScann">resetDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDistanceMetric">resetDistanceMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetFilterFields">resetFilterFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetStoreFields">resetStoreFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDedicatedInfrastructure` <a name="putDedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDedicatedInfrastructure"></a>

```typescript
public putDedicatedInfrastructure(value: GoogleVectorSearchIndexDedicatedInfrastructure): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDedicatedInfrastructure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

---

##### `putDenseScann` <a name="putDenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDenseScann"></a>

```typescript
public putDenseScann(value: GoogleVectorSearchIndexDenseScann): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDenseScann.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVectorSearchIndexTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

---

##### `resetDedicatedInfrastructure` <a name="resetDedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDedicatedInfrastructure"></a>

```typescript
public resetDedicatedInfrastructure(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDenseScann` <a name="resetDenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDenseScann"></a>

```typescript
public resetDenseScann(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDistanceMetric` <a name="resetDistanceMetric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDistanceMetric"></a>

```typescript
public resetDistanceMetric(): void
```

##### `resetFilterFields` <a name="resetFilterFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetFilterFields"></a>

```typescript
public resetFilterFields(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetStoreFields` <a name="resetStoreFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetStoreFields"></a>

```typescript
public resetStoreFields(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVectorSearchIndex resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isConstruct"></a>

```typescript
import { googleVectorSearchIndex } from '@cdktn/provider-google-beta'

googleVectorSearchIndex.GoogleVectorSearchIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformElement"></a>

```typescript
import { googleVectorSearchIndex } from '@cdktn/provider-google-beta'

googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformResource"></a>

```typescript
import { googleVectorSearchIndex } from '@cdktn/provider-google-beta'

googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport"></a>

```typescript
import { googleVectorSearchIndex } from '@cdktn/provider-google-beta'

googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleVectorSearchIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVectorSearchIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVectorSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVectorSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructure">dedicatedInfrastructure</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScann">denseScann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference">GoogleVectorSearchIndexDenseScannOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference">GoogleVectorSearchIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructureInput">dedicatedInfrastructureInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScannInput">denseScannInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetricInput">distanceMetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFieldsInput">filterFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexFieldInput">indexFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexIdInput">indexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFieldsInput">storeFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetric">distanceMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFields">filterFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexField">indexField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFields">storeFields</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dedicatedInfrastructure`<sup>Required</sup> <a name="dedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructure"></a>

```typescript
public readonly dedicatedInfrastructure: GoogleVectorSearchIndexDedicatedInfrastructureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureOutputReference</a>

---

##### `denseScann`<sup>Required</sup> <a name="denseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScann"></a>

```typescript
public readonly denseScann: GoogleVectorSearchIndexDenseScannOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference">GoogleVectorSearchIndexDenseScannOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVectorSearchIndexTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference">GoogleVectorSearchIndexTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `dedicatedInfrastructureInput`<sup>Optional</sup> <a name="dedicatedInfrastructureInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructureInput"></a>

```typescript
public readonly dedicatedInfrastructureInput: GoogleVectorSearchIndexDedicatedInfrastructure;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `denseScannInput`<sup>Optional</sup> <a name="denseScannInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScannInput"></a>

```typescript
public readonly denseScannInput: GoogleVectorSearchIndexDenseScann;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `distanceMetricInput`<sup>Optional</sup> <a name="distanceMetricInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetricInput"></a>

```typescript
public readonly distanceMetricInput: string;
```

- *Type:* string

---

##### `filterFieldsInput`<sup>Optional</sup> <a name="filterFieldsInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFieldsInput"></a>

```typescript
public readonly filterFieldsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexFieldInput`<sup>Optional</sup> <a name="indexFieldInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexFieldInput"></a>

```typescript
public readonly indexFieldInput: string;
```

- *Type:* string

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexIdInput"></a>

```typescript
public readonly indexIdInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `storeFieldsInput`<sup>Optional</sup> <a name="storeFieldsInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFieldsInput"></a>

```typescript
public readonly storeFieldsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVectorSearchIndexTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `distanceMetric`<sup>Required</sup> <a name="distanceMetric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetric"></a>

```typescript
public readonly distanceMetric: string;
```

- *Type:* string

---

##### `filterFields`<sup>Required</sup> <a name="filterFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFields"></a>

```typescript
public readonly filterFields: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexField`<sup>Required</sup> <a name="indexField" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexField"></a>

```typescript
public readonly indexField: string;
```

- *Type:* string

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `storeFields`<sup>Required</sup> <a name="storeFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFields"></a>

```typescript
public readonly storeFields: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVectorSearchIndexConfig <a name="GoogleVectorSearchIndexConfig" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.Initializer"></a>

```typescript
import { googleVectorSearchIndex } from '@cdktn/provider-google-beta'

const googleVectorSearchIndexConfig: googleVectorSearchIndex.GoogleVectorSearchIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.collectionId">collectionId</a></code> | <code>string</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexField">indexField</a></code> | <code>string</code> | The collection schema field to index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexId">indexId</a></code> | <code>string</code> | ID of the Index to create. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dedicatedInfrastructure">dedicatedInfrastructure</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | dedicated_infrastructure block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.denseScann">denseScann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | dense_scann block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.description">description</a></code> | <code>string</code> | User-specified description of the index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.displayName">displayName</a></code> | <code>string</code> | User-specified display name of the index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.distanceMetric">distanceMetric</a></code> | <code>string</code> | Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.filterFields">filterFields</a></code> | <code>string[]</code> | The fields to push into the index to enable fast ANN inline filtering. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#id GoogleVectorSearchIndex#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#project GoogleVectorSearchIndex#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.storeFields">storeFields</a></code> | <code>string[]</code> | The fields to push into the index to enable inline data retrieval. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#collection_id GoogleVectorSearchIndex#collection_id}

---

##### `indexField`<sup>Required</sup> <a name="indexField" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexField"></a>

```typescript
public readonly indexField: string;
```

- *Type:* string

The collection schema field to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#index_field GoogleVectorSearchIndex#index_field}

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

ID of the Index to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#index_id GoogleVectorSearchIndex#index_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#location GoogleVectorSearchIndex#location}

---

##### `dedicatedInfrastructure`<sup>Optional</sup> <a name="dedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dedicatedInfrastructure"></a>

```typescript
public readonly dedicatedInfrastructure: GoogleVectorSearchIndexDedicatedInfrastructure;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

dedicated_infrastructure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#dedicated_infrastructure GoogleVectorSearchIndex#dedicated_infrastructure}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#deletion_policy GoogleVectorSearchIndex#deletion_policy}

---

##### `denseScann`<sup>Optional</sup> <a name="denseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.denseScann"></a>

```typescript
public readonly denseScann: GoogleVectorSearchIndexDenseScann;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

dense_scann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#dense_scann GoogleVectorSearchIndex#dense_scann}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-specified description of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#description GoogleVectorSearchIndex#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-specified display name of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#display_name GoogleVectorSearchIndex#display_name}

---

##### `distanceMetric`<sup>Optional</sup> <a name="distanceMetric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.distanceMetric"></a>

```typescript
public readonly distanceMetric: string;
```

- *Type:* string

Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#distance_metric GoogleVectorSearchIndex#distance_metric}

---

##### `filterFields`<sup>Optional</sup> <a name="filterFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.filterFields"></a>

```typescript
public readonly filterFields: string[];
```

- *Type:* string[]

The fields to push into the index to enable fast ANN inline filtering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#filter_fields GoogleVectorSearchIndex#filter_fields}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#id GoogleVectorSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#labels GoogleVectorSearchIndex#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#project GoogleVectorSearchIndex#project}.

---

##### `storeFields`<sup>Optional</sup> <a name="storeFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.storeFields"></a>

```typescript
public readonly storeFields: string[];
```

- *Type:* string[]

The fields to push into the index to enable inline data retrieval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#store_fields GoogleVectorSearchIndex#store_fields}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVectorSearchIndexTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#timeouts GoogleVectorSearchIndex#timeouts}

---

### GoogleVectorSearchIndexDedicatedInfrastructure <a name="GoogleVectorSearchIndexDedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.Initializer"></a>

```typescript
import { googleVectorSearchIndex } from '@cdktn/provider-google-beta'

const googleVectorSearchIndexDedicatedInfrastructure: googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.autoscalingSpec">autoscalingSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | autoscaling_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.mode">mode</a></code> | <code>string</code> | Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"]. |

---

##### `autoscalingSpec`<sup>Optional</sup> <a name="autoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.autoscalingSpec"></a>

```typescript
public readonly autoscalingSpec: GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

autoscaling_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#autoscaling_spec GoogleVectorSearchIndex#autoscaling_spec}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#mode GoogleVectorSearchIndex#mode}

---

### GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec <a name="GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.Initializer"></a>

```typescript
import { googleVectorSearchIndex } from '@cdktn/provider-google-beta'

const googleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec: googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.maxReplicaCount">maxReplicaCount</a></code> | <code>number</code> | The maximum number of replicas. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.minReplicaCount">minReplicaCount</a></code> | <code>number</code> | The minimum number of replicas. |

---

##### `maxReplicaCount`<sup>Optional</sup> <a name="maxReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.maxReplicaCount"></a>

```typescript
public readonly maxReplicaCount: number;
```

- *Type:* number

The maximum number of replicas.

Must be >= 'min_replica_count'
and <= '1000'. If not set or set to '0', defaults to the greater
of 'min_replica_count' and '2' (or '5' for the v1beta version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#max_replica_count GoogleVectorSearchIndex#max_replica_count}

---

##### `minReplicaCount`<sup>Optional</sup> <a name="minReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.minReplicaCount"></a>

```typescript
public readonly minReplicaCount: number;
```

- *Type:* number

The minimum number of replicas.

If not set or set to '0', defaults
to '2'. Must be >= '1' and <= '1000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#min_replica_count GoogleVectorSearchIndex#min_replica_count}

---

### GoogleVectorSearchIndexDenseScann <a name="GoogleVectorSearchIndexDenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann.Initializer"></a>

```typescript
import { googleVectorSearchIndex } from '@cdktn/provider-google-beta'

const googleVectorSearchIndexDenseScann: googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann.property.featureNormType">featureNormType</a></code> | <code>string</code> | Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"]. |

---

##### `featureNormType`<sup>Optional</sup> <a name="featureNormType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann.property.featureNormType"></a>

```typescript
public readonly featureNormType: string;
```

- *Type:* string

Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#feature_norm_type GoogleVectorSearchIndex#feature_norm_type}

---

### GoogleVectorSearchIndexTimeouts <a name="GoogleVectorSearchIndexTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.Initializer"></a>

```typescript
import { googleVectorSearchIndex } from '@cdktn/provider-google-beta'

const googleVectorSearchIndexTimeouts: googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#create GoogleVectorSearchIndex#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#delete GoogleVectorSearchIndex#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#update GoogleVectorSearchIndex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#create GoogleVectorSearchIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#delete GoogleVectorSearchIndex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_vector_search_index#update GoogleVectorSearchIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference <a name="GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer"></a>

```typescript
import { googleVectorSearchIndex } from '@cdktn/provider-google-beta'

new googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMaxReplicaCount">resetMaxReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMinReplicaCount">resetMinReplicaCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxReplicaCount` <a name="resetMaxReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMaxReplicaCount"></a>

```typescript
public resetMaxReplicaCount(): void
```

##### `resetMinReplicaCount` <a name="resetMinReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMinReplicaCount"></a>

```typescript
public resetMinReplicaCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCountInput">maxReplicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCountInput">minReplicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCount">maxReplicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCount">minReplicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxReplicaCountInput`<sup>Optional</sup> <a name="maxReplicaCountInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCountInput"></a>

```typescript
public readonly maxReplicaCountInput: number;
```

- *Type:* number

---

##### `minReplicaCountInput`<sup>Optional</sup> <a name="minReplicaCountInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCountInput"></a>

```typescript
public readonly minReplicaCountInput: number;
```

- *Type:* number

---

##### `maxReplicaCount`<sup>Required</sup> <a name="maxReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCount"></a>

```typescript
public readonly maxReplicaCount: number;
```

- *Type:* number

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCount"></a>

```typescript
public readonly minReplicaCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---


### GoogleVectorSearchIndexDedicatedInfrastructureOutputReference <a name="GoogleVectorSearchIndexDedicatedInfrastructureOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer"></a>

```typescript
import { googleVectorSearchIndex } from '@cdktn/provider-google-beta'

new googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec">putAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetAutoscalingSpec">resetAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscalingSpec` <a name="putAutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec"></a>

```typescript
public putAutoscalingSpec(value: GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---

##### `resetAutoscalingSpec` <a name="resetAutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetAutoscalingSpec"></a>

```typescript
public resetAutoscalingSpec(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpec">autoscalingSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpecInput">autoscalingSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingSpec`<sup>Required</sup> <a name="autoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpec"></a>

```typescript
public readonly autoscalingSpec: GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference</a>

---

##### `autoscalingSpecInput`<sup>Optional</sup> <a name="autoscalingSpecInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpecInput"></a>

```typescript
public readonly autoscalingSpecInput: GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVectorSearchIndexDedicatedInfrastructure;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

---


### GoogleVectorSearchIndexDenseScannOutputReference <a name="GoogleVectorSearchIndexDenseScannOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer"></a>

```typescript
import { googleVectorSearchIndex } from '@cdktn/provider-google-beta'

new googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resetFeatureNormType">resetFeatureNormType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFeatureNormType` <a name="resetFeatureNormType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resetFeatureNormType"></a>

```typescript
public resetFeatureNormType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormTypeInput">featureNormTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormType">featureNormType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `featureNormTypeInput`<sup>Optional</sup> <a name="featureNormTypeInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormTypeInput"></a>

```typescript
public readonly featureNormTypeInput: string;
```

- *Type:* string

---

##### `featureNormType`<sup>Required</sup> <a name="featureNormType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormType"></a>

```typescript
public readonly featureNormType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVectorSearchIndexDenseScann;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

---


### GoogleVectorSearchIndexTimeoutsOutputReference <a name="GoogleVectorSearchIndexTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVectorSearchIndex } from '@cdktn/provider-google-beta'

new googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVectorSearchIndexTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

---



