# `googleBigtableMemoryLayer` Submodule <a name="`googleBigtableMemoryLayer` Submodule" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigtableMemoryLayer <a name="GoogleBigtableMemoryLayer" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer google_bigtable_memory_layer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer"></a>

```typescript
import { googleBigtableMemoryLayer } from '@cdktn/provider-google-beta'

new googleBigtableMemoryLayer.GoogleBigtableMemoryLayer(scope: Construct, id: string, config: GoogleBigtableMemoryLayerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig">GoogleBigtableMemoryLayerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig">GoogleBigtableMemoryLayerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBigtableMemoryLayerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts">GoogleBigtableMemoryLayerTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBigtableMemoryLayer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isConstruct"></a>

```typescript
import { googleBigtableMemoryLayer } from '@cdktn/provider-google-beta'

googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isTerraformElement"></a>

```typescript
import { googleBigtableMemoryLayer } from '@cdktn/provider-google-beta'

googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isTerraformResource"></a>

```typescript
import { googleBigtableMemoryLayer } from '@cdktn/provider-google-beta'

googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.generateConfigForImport"></a>

```typescript
import { googleBigtableMemoryLayer } from '@cdktn/provider-google-beta'

googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleBigtableMemoryLayer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigtableMemoryLayer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigtableMemoryLayer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBigtableMemoryLayer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.memoryConfig">memoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList">GoogleBigtableMemoryLayerMemoryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference">GoogleBigtableMemoryLayerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts">GoogleBigtableMemoryLayerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `memoryConfig`<sup>Required</sup> <a name="memoryConfig" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.memoryConfig"></a>

```typescript
public readonly memoryConfig: GoogleBigtableMemoryLayerMemoryConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList">GoogleBigtableMemoryLayerMemoryConfigList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigtableMemoryLayerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference">GoogleBigtableMemoryLayerTimeoutsOutputReference</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBigtableMemoryLayerTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts">GoogleBigtableMemoryLayerTimeouts</a>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigtableMemoryLayerConfig <a name="GoogleBigtableMemoryLayerConfig" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.Initializer"></a>

```typescript
import { googleBigtableMemoryLayer } from '@cdktn/provider-google-beta'

const googleBigtableMemoryLayerConfig: googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.cluster">cluster</a></code> | <code>string</code> | The ID of the cluster to enable the memory layer on. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.instance">instance</a></code> | <code>string</code> | The name of the instance to enable the memory layer within. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#id GoogleBigtableMemoryLayer#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#project GoogleBigtableMemoryLayer#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts">GoogleBigtableMemoryLayerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The ID of the cluster to enable the memory layer on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#cluster GoogleBigtableMemoryLayer#cluster}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The name of the instance to enable the memory layer within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#instance GoogleBigtableMemoryLayer#instance}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#deletion_policy GoogleBigtableMemoryLayer#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#id GoogleBigtableMemoryLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#project GoogleBigtableMemoryLayer#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigtableMemoryLayerTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts">GoogleBigtableMemoryLayerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#timeouts GoogleBigtableMemoryLayer#timeouts}

---

### GoogleBigtableMemoryLayerMemoryConfig <a name="GoogleBigtableMemoryLayerMemoryConfig" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfig.Initializer"></a>

```typescript
import { googleBigtableMemoryLayer } from '@cdktn/provider-google-beta'

const googleBigtableMemoryLayerMemoryConfig: googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfig = { ... }
```


### GoogleBigtableMemoryLayerTimeouts <a name="GoogleBigtableMemoryLayerTimeouts" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts.Initializer"></a>

```typescript
import { googleBigtableMemoryLayer } from '@cdktn/provider-google-beta'

const googleBigtableMemoryLayerTimeouts: googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#create GoogleBigtableMemoryLayer#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#delete GoogleBigtableMemoryLayer#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#create GoogleBigtableMemoryLayer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#delete GoogleBigtableMemoryLayer#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigtableMemoryLayerMemoryConfigList <a name="GoogleBigtableMemoryLayerMemoryConfigList" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.Initializer"></a>

```typescript
import { googleBigtableMemoryLayer } from '@cdktn/provider-google-beta'

new googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.get"></a>

```typescript
public get(index: number): GoogleBigtableMemoryLayerMemoryConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleBigtableMemoryLayerMemoryConfigOutputReference <a name="GoogleBigtableMemoryLayerMemoryConfigOutputReference" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer"></a>

```typescript
import { googleBigtableMemoryLayer } from '@cdktn/provider-google-beta'

new googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.property.storageSizeGib">storageSizeGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfig">GoogleBigtableMemoryLayerMemoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageSizeGib`<sup>Required</sup> <a name="storageSizeGib" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.property.storageSizeGib"></a>

```typescript
public readonly storageSizeGib: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigtableMemoryLayerMemoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfig">GoogleBigtableMemoryLayerMemoryConfig</a>

---


### GoogleBigtableMemoryLayerTimeoutsOutputReference <a name="GoogleBigtableMemoryLayerTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBigtableMemoryLayer } from '@cdktn/provider-google-beta'

new googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts">GoogleBigtableMemoryLayerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigtableMemoryLayerTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts">GoogleBigtableMemoryLayerTimeouts</a>

---



