# `googleVertexAiModelGardenEnableModel` Submodule <a name="`googleVertexAiModelGardenEnableModel` Submodule" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiModelGardenEnableModel <a name="GoogleVertexAiModelGardenEnableModel" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_vertex_ai_model_garden_enable_model google_vertex_ai_model_garden_enable_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer"></a>

```typescript
import { googleVertexAiModelGardenEnableModel } from '@cdktn/provider-google-beta'

new googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel(scope: Construct, id: string, config: GoogleVertexAiModelGardenEnableModelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig">GoogleVertexAiModelGardenEnableModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig">GoogleVertexAiModelGardenEnableModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVertexAiModelGardenEnableModelTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiModelGardenEnableModel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isConstruct"></a>

```typescript
import { googleVertexAiModelGardenEnableModel } from '@cdktn/provider-google-beta'

googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformElement"></a>

```typescript
import { googleVertexAiModelGardenEnableModel } from '@cdktn/provider-google-beta'

googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformResource"></a>

```typescript
import { googleVertexAiModelGardenEnableModel } from '@cdktn/provider-google-beta'

googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport"></a>

```typescript
import { googleVertexAiModelGardenEnableModel } from '@cdktn/provider-google-beta'

googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleVertexAiModelGardenEnableModel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiModelGardenEnableModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiModelGardenEnableModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_vertex_ai_model_garden_enable_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiModelGardenEnableModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.enablementState">enablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherEndpoint">publisherEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference">GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherModelNameInput">publisherModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherModelName">publisherModelName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.enablementState"></a>

```typescript
public readonly enablementState: string;
```

- *Type:* string

---

##### `publisherEndpoint`<sup>Required</sup> <a name="publisherEndpoint" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherEndpoint"></a>

```typescript
public readonly publisherEndpoint: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference">GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `publisherModelNameInput`<sup>Optional</sup> <a name="publisherModelNameInput" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherModelNameInput"></a>

```typescript
public readonly publisherModelNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVertexAiModelGardenEnableModelTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `publisherModelName`<sup>Required</sup> <a name="publisherModelName" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherModelName"></a>

```typescript
public readonly publisherModelName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiModelGardenEnableModelConfig <a name="GoogleVertexAiModelGardenEnableModelConfig" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.Initializer"></a>

```typescript
import { googleVertexAiModelGardenEnableModel } from '@cdktn/provider-google-beta'

const googleVertexAiModelGardenEnableModelConfig: googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.publisherModelName">publisherModelName</a></code> | <code>string</code> | The resource name of the Model Garden publisher model to enable. Format: 'publishers/{publisher}/models/{publisher_model}', optionally with a version suffix, for example 'publishers/google/models/paligemma@paligemma-224-float32'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_vertex_ai_model_garden_enable_model#id GoogleVertexAiModelGardenEnableModel#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_vertex_ai_model_garden_enable_model#project GoogleVertexAiModelGardenEnableModel#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `publisherModelName`<sup>Required</sup> <a name="publisherModelName" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.publisherModelName"></a>

```typescript
public readonly publisherModelName: string;
```

- *Type:* string

The resource name of the Model Garden publisher model to enable. Format: 'publishers/{publisher}/models/{publisher_model}', optionally with a version suffix, for example 'publishers/google/models/paligemma@paligemma-224-float32'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_vertex_ai_model_garden_enable_model#publisher_model_name GoogleVertexAiModelGardenEnableModel#publisher_model_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_vertex_ai_model_garden_enable_model#id GoogleVertexAiModelGardenEnableModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_vertex_ai_model_garden_enable_model#project GoogleVertexAiModelGardenEnableModel#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiModelGardenEnableModelTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_vertex_ai_model_garden_enable_model#timeouts GoogleVertexAiModelGardenEnableModel#timeouts}

---

### GoogleVertexAiModelGardenEnableModelTimeouts <a name="GoogleVertexAiModelGardenEnableModelTimeouts" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts.Initializer"></a>

```typescript
import { googleVertexAiModelGardenEnableModel } from '@cdktn/provider-google-beta'

const googleVertexAiModelGardenEnableModelTimeouts: googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_vertex_ai_model_garden_enable_model#create GoogleVertexAiModelGardenEnableModel#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_vertex_ai_model_garden_enable_model#delete GoogleVertexAiModelGardenEnableModel#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_vertex_ai_model_garden_enable_model#create GoogleVertexAiModelGardenEnableModel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_vertex_ai_model_garden_enable_model#delete GoogleVertexAiModelGardenEnableModel#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference <a name="GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiModelGardenEnableModel } from '@cdktn/provider-google-beta'

new googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiModelGardenEnableModelTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a>

---



