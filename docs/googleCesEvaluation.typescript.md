# `googleCesEvaluation` Submodule <a name="`googleCesEvaluation` Submodule" id="@cdktn/provider-google-beta.googleCesEvaluation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesEvaluation <a name="GoogleCesEvaluation" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation google_ces_evaluation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluation(scope: Construct, id: string, config: GoogleCesEvaluationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig">GoogleCesEvaluationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig">GoogleCesEvaluationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.putGolden">putGolden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetGolden">resetGolden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGolden` <a name="putGolden" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.putGolden"></a>

```typescript
public putGolden(value: GoogleCesEvaluationGolden): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.putGolden.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden">GoogleCesEvaluationGolden</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCesEvaluationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts">GoogleCesEvaluationTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGolden` <a name="resetGolden" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetGolden"></a>

```typescript
public resetGolden(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesEvaluation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isConstruct"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

googleCesEvaluation.GoogleCesEvaluation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isTerraformElement"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

googleCesEvaluation.GoogleCesEvaluation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isTerraformResource"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

googleCesEvaluation.GoogleCesEvaluation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.generateConfigForImport"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

googleCesEvaluation.GoogleCesEvaluation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleCesEvaluation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCesEvaluation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCesEvaluation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesEvaluation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.evaluationDatasets">evaluationDatasets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.evaluationRuns">evaluationRuns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.golden">golden</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference">GoogleCesEvaluationGoldenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.invalid">invalid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference">GoogleCesEvaluationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.appInput">appInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.evaluationIdInput">evaluationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.goldenInput">goldenInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden">GoogleCesEvaluationGolden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts">GoogleCesEvaluationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.app">app</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.evaluationId">evaluationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `evaluationDatasets`<sup>Required</sup> <a name="evaluationDatasets" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.evaluationDatasets"></a>

```typescript
public readonly evaluationDatasets: string[];
```

- *Type:* string[]

---

##### `evaluationRuns`<sup>Required</sup> <a name="evaluationRuns" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.evaluationRuns"></a>

```typescript
public readonly evaluationRuns: string[];
```

- *Type:* string[]

---

##### `golden`<sup>Required</sup> <a name="golden" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.golden"></a>

```typescript
public readonly golden: GoogleCesEvaluationGoldenOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference">GoogleCesEvaluationGoldenOutputReference</a>

---

##### `invalid`<sup>Required</sup> <a name="invalid" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.invalid"></a>

```typescript
public readonly invalid: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCesEvaluationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference">GoogleCesEvaluationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.appInput"></a>

```typescript
public readonly appInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `evaluationIdInput`<sup>Optional</sup> <a name="evaluationIdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.evaluationIdInput"></a>

```typescript
public readonly evaluationIdInput: string;
```

- *Type:* string

---

##### `goldenInput`<sup>Optional</sup> <a name="goldenInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.goldenInput"></a>

```typescript
public readonly goldenInput: GoogleCesEvaluationGolden;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden">GoogleCesEvaluationGolden</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCesEvaluationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts">GoogleCesEvaluationTimeouts</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `evaluationId`<sup>Required</sup> <a name="evaluationId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.evaluationId"></a>

```typescript
public readonly evaluationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesEvaluationConfig <a name="GoogleCesEvaluationConfig" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationConfig: googleCesEvaluation.GoogleCesEvaluationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.app">app</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#app GoogleCesEvaluation#app}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.displayName">displayName</a></code> | <code>string</code> | User-defined display name of the evaluation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.evaluationId">evaluationId</a></code> | <code>string</code> | The ID to use for the evaluation, which will become the final component of the evaluation's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#location GoogleCesEvaluation#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.description">description</a></code> | <code>string</code> | User-defined description of the evaluation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.golden">golden</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden">GoogleCesEvaluationGolden</a></code> | golden block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#project GoogleCesEvaluation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.tags">tags</a></code> | <code>string[]</code> | User defined tags to categorize the evaluation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts">GoogleCesEvaluationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#app GoogleCesEvaluation#app}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-defined display name of the evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#display_name GoogleCesEvaluation#display_name}

---

##### `evaluationId`<sup>Required</sup> <a name="evaluationId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.evaluationId"></a>

```typescript
public readonly evaluationId: string;
```

- *Type:* string

The ID to use for the evaluation, which will become the final component of the evaluation's resource name.

If not provided, a unique ID will be
automatically assigned for the evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#evaluation_id GoogleCesEvaluation#evaluation_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#location GoogleCesEvaluation#location}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-defined description of the evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#description GoogleCesEvaluation#description}

---

##### `golden`<sup>Optional</sup> <a name="golden" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.golden"></a>

```typescript
public readonly golden: GoogleCesEvaluationGolden;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden">GoogleCesEvaluationGolden</a>

golden block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#golden GoogleCesEvaluation#golden}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#project GoogleCesEvaluation#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

User defined tags to categorize the evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tags GoogleCesEvaluation#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCesEvaluationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts">GoogleCesEvaluationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#timeouts GoogleCesEvaluation#timeouts}

---

### GoogleCesEvaluationGolden <a name="GoogleCesEvaluationGolden" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGolden: googleCesEvaluation.GoogleCesEvaluationGolden = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden.property.turns">turns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns">GoogleCesEvaluationGoldenTurns</a>[]</code> | turns block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden.property.evaluationExpectations">evaluationExpectations</a></code> | <code>string[]</code> | The evaluation expectations to evaluate the replayed conversation against. Format: projects/{project}/locations/{location}/apps/{app}/evaluationExpectations/{evaluationExpectation}. |

---

##### `turns`<sup>Required</sup> <a name="turns" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden.property.turns"></a>

```typescript
public readonly turns: IResolvable | GoogleCesEvaluationGoldenTurns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns">GoogleCesEvaluationGoldenTurns</a>[]

turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#turns GoogleCesEvaluation#turns}

---

##### `evaluationExpectations`<sup>Optional</sup> <a name="evaluationExpectations" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden.property.evaluationExpectations"></a>

```typescript
public readonly evaluationExpectations: string[];
```

- *Type:* string[]

The evaluation expectations to evaluate the replayed conversation against. Format: projects/{project}/locations/{location}/apps/{app}/evaluationExpectations/{evaluationExpectation}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#evaluation_expectations GoogleCesEvaluation#evaluation_expectations}

---

### GoogleCesEvaluationGoldenTurns <a name="GoogleCesEvaluationGoldenTurns" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurns: googleCesEvaluation.GoogleCesEvaluationGoldenTurns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns.property.steps">steps</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps">GoogleCesEvaluationGoldenTurnsSteps</a>[]</code> | steps block. |

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns.property.steps"></a>

```typescript
public readonly steps: IResolvable | GoogleCesEvaluationGoldenTurnsSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps">GoogleCesEvaluationGoldenTurnsSteps</a>[]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#steps GoogleCesEvaluation#steps}

---

### GoogleCesEvaluationGoldenTurnsRootSpan <a name="GoogleCesEvaluationGoldenTurnsRootSpan" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpan.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsRootSpan: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpan = { ... }
```


### GoogleCesEvaluationGoldenTurnsSteps <a name="GoogleCesEvaluationGoldenTurnsSteps" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsSteps: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps.property.agentTransfer">agentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsAgentTransfer</a></code> | agent_transfer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps.property.expectation">expectation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation">GoogleCesEvaluationGoldenTurnsStepsExpectation</a></code> | expectation block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps.property.userInput">userInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput">GoogleCesEvaluationGoldenTurnsStepsUserInput</a></code> | user_input block. |

---

##### `agentTransfer`<sup>Optional</sup> <a name="agentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps.property.agentTransfer"></a>

```typescript
public readonly agentTransfer: GoogleCesEvaluationGoldenTurnsStepsAgentTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsAgentTransfer</a>

agent_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#agent_transfer GoogleCesEvaluation#agent_transfer}

---

##### `expectation`<sup>Optional</sup> <a name="expectation" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps.property.expectation"></a>

```typescript
public readonly expectation: GoogleCesEvaluationGoldenTurnsStepsExpectation;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation">GoogleCesEvaluationGoldenTurnsStepsExpectation</a>

expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#expectation GoogleCesEvaluation#expectation}

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps.property.userInput"></a>

```typescript
public readonly userInput: GoogleCesEvaluationGoldenTurnsStepsUserInput;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput">GoogleCesEvaluationGoldenTurnsStepsUserInput</a>

user_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#user_input GoogleCesEvaluation#user_input}

---

### GoogleCesEvaluationGoldenTurnsStepsAgentTransfer <a name="GoogleCesEvaluationGoldenTurnsStepsAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsAgentTransfer: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer.property.targetAgent">targetAgent</a></code> | <code>string</code> | The resource name of the target agent. |

---

##### `targetAgent`<sup>Required</sup> <a name="targetAgent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer.property.targetAgent"></a>

```typescript
public readonly targetAgent: string;
```

- *Type:* string

The resource name of the target agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#target_agent GoogleCesEvaluation#target_agent}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectation <a name="GoogleCesEvaluationGoldenTurnsStepsExpectation" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectation: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.agentResponse">agentResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse</a></code> | agent_response block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.agentTransfer">agentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer</a></code> | agent_transfer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.mockToolResponse">mockToolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse</a></code> | mock_tool_response block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.note">note</a></code> | <code>string</code> | A note describing the expectation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.toolCall">toolCall</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall</a></code> | tool_call block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.toolResponse">toolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse</a></code> | tool_response block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.updatedVariables">updatedVariables</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables</a></code> | updated_variables block. |

---

##### `agentResponse`<sup>Optional</sup> <a name="agentResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.agentResponse"></a>

```typescript
public readonly agentResponse: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse</a>

agent_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#agent_response GoogleCesEvaluation#agent_response}

---

##### `agentTransfer`<sup>Optional</sup> <a name="agentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.agentTransfer"></a>

```typescript
public readonly agentTransfer: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer</a>

agent_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#agent_transfer GoogleCesEvaluation#agent_transfer}

---

##### `mockToolResponse`<sup>Optional</sup> <a name="mockToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.mockToolResponse"></a>

```typescript
public readonly mockToolResponse: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse</a>

mock_tool_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#mock_tool_response GoogleCesEvaluation#mock_tool_response}

---

##### `note`<sup>Optional</sup> <a name="note" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.note"></a>

```typescript
public readonly note: string;
```

- *Type:* string

A note describing the expectation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#note GoogleCesEvaluation#note}

---

##### `toolCall`<sup>Optional</sup> <a name="toolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.toolCall"></a>

```typescript
public readonly toolCall: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall</a>

tool_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_call GoogleCesEvaluation#tool_call}

---

##### `toolResponse`<sup>Optional</sup> <a name="toolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.toolResponse"></a>

```typescript
public readonly toolResponse: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse</a>

tool_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_response GoogleCesEvaluation#tool_response}

---

##### `updatedVariables`<sup>Optional</sup> <a name="updatedVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.updatedVariables"></a>

```typescript
public readonly updatedVariables: GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables</a>

updated_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#updated_variables GoogleCesEvaluation#updated_variables}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationAgentResponse: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse.property.chunks">chunks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks</a>[]</code> | chunks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse.property.role">role</a></code> | <code>string</code> | The role within the conversation, e.g., user, agent. |

---

##### `chunks`<sup>Optional</sup> <a name="chunks" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse.property.chunks"></a>

```typescript
public readonly chunks: IResolvable | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks</a>[]

chunks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#chunks GoogleCesEvaluation#chunks}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The role within the conversation, e.g., user, agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#role GoogleCesEvaluation#role}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.agentTransfer">agentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer</a></code> | agent_transfer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.blob">blob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob</a></code> | blob block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.image">image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage</a></code> | image block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.text">text</a></code> | <code>string</code> | Text data. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.toolCall">toolCall</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall</a></code> | tool_call block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.toolResponse">toolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse</a></code> | tool_response block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.updatedVariables">updatedVariables</a></code> | <code>{[ key: string ]: string}</code> | Updated variables in JSON object format. |

---

##### `agentTransfer`<sup>Optional</sup> <a name="agentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.agentTransfer"></a>

```typescript
public readonly agentTransfer: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer</a>

agent_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#agent_transfer GoogleCesEvaluation#agent_transfer}

---

##### `blob`<sup>Optional</sup> <a name="blob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.blob"></a>

```typescript
public readonly blob: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob</a>

blob block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#blob GoogleCesEvaluation#blob}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.image"></a>

```typescript
public readonly image: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#image GoogleCesEvaluation#image}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Text data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#text GoogleCesEvaluation#text}

---

##### `toolCall`<sup>Optional</sup> <a name="toolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.toolCall"></a>

```typescript
public readonly toolCall: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall</a>

tool_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_call GoogleCesEvaluation#tool_call}

---

##### `toolResponse`<sup>Optional</sup> <a name="toolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.toolResponse"></a>

```typescript
public readonly toolResponse: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse</a>

tool_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_response GoogleCesEvaluation#tool_response}

---

##### `updatedVariables`<sup>Optional</sup> <a name="updatedVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.updatedVariables"></a>

```typescript
public readonly updatedVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Updated variables in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#updated_variables GoogleCesEvaluation#updated_variables}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer.property.targetAgent">targetAgent</a></code> | <code>string</code> | The agent to which the conversation is being transferred. |

---

##### `targetAgent`<sup>Required</sup> <a name="targetAgent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer.property.targetAgent"></a>

```typescript
public readonly targetAgent: string;
```

- *Type:* string

The agent to which the conversation is being transferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#target_agent GoogleCesEvaluation#target_agent}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob.property.data">data</a></code> | <code>string</code> | Raw bytes of the blob. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob.property.mimeType">mimeType</a></code> | <code>string</code> | The IANA standard MIME type of the source data. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Raw bytes of the blob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#data GoogleCesEvaluation#data}

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

The IANA standard MIME type of the source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#mime_type GoogleCesEvaluation#mime_type}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage.property.data">data</a></code> | <code>string</code> | Raw bytes of the image. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage.property.mimeType">mimeType</a></code> | <code>string</code> | The IANA standard MIME type of the source data. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Raw bytes of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#data GoogleCesEvaluation#data}

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

The IANA standard MIME type of the source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#mime_type GoogleCesEvaluation#mime_type}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.property.args">args</a></code> | <code>{[ key: string ]: string}</code> | The input parameters and values for the tool in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.property.id">id</a></code> | <code>string</code> | The unique identifier of the tool call. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.property.tool">tool</a></code> | <code>string</code> | The resource name of the tool. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool</a></code> | toolset_tool block. |

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.property.args"></a>

```typescript
public readonly args: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The input parameters and values for the tool in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#args GoogleCesEvaluation#args}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The unique identifier of the tool call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

The resource name of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}

---

##### `toolsetTool`<sup>Optional</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool.property.toolset">toolset</a></code> | <code>string</code> | The resource name of the Toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool.property.toolId">toolId</a></code> | <code>string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

The resource name of the Toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}

---

##### `toolId`<sup>Optional</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.property.id">id</a></code> | <code>string</code> | The matching ID of the tool call the response is for. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.property.response">response</a></code> | <code>{[ key: string ]: string}</code> | The tool execution result in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.property.tool">tool</a></code> | <code>string</code> | The resource name of the tool. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool</a></code> | toolset_tool block. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.property.response"></a>

```typescript
public readonly response: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tool execution result in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#response GoogleCesEvaluation#response}

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

The resource name of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}

---

##### `toolsetTool`<sup>Optional</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool.property.toolset">toolset</a></code> | <code>string</code> | The resource name of the Toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool.property.toolId">toolId</a></code> | <code>string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

The resource name of the Toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}

---

##### `toolId`<sup>Optional</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer.property.displayName">displayName</a></code> | <code>string</code> | The display name of the target agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer.property.targetAgent">targetAgent</a></code> | <code>string</code> | The resource name of the target agent. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the target agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#display_name GoogleCesEvaluation#display_name}

---

##### `targetAgent`<sup>Optional</sup> <a name="targetAgent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer.property.targetAgent"></a>

```typescript
public readonly targetAgent: string;
```

- *Type:* string

The resource name of the target agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#target_agent GoogleCesEvaluation#target_agent}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.property.id">id</a></code> | <code>string</code> | The matching ID of the tool call the response is for. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.property.response">response</a></code> | <code>{[ key: string ]: string}</code> | The tool execution result in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.property.tool">tool</a></code> | <code>string</code> | The resource name of the tool. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool</a></code> | toolset_tool block. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.property.response"></a>

```typescript
public readonly response: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tool execution result in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#response GoogleCesEvaluation#response}

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

The resource name of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}

---

##### `toolsetTool`<sup>Optional</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool.property.toolset">toolset</a></code> | <code>string</code> | The resource name of the Toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool.property.toolId">toolId</a></code> | <code>string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

The resource name of the Toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}

---

##### `toolId`<sup>Optional</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationToolCall: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.property.args">args</a></code> | <code>{[ key: string ]: string}</code> | The input parameters and values for the tool in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.property.id">id</a></code> | <code>string</code> | The unique identifier of the tool call. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.property.tool">tool</a></code> | <code>string</code> | The resource name of the tool. Note: 'tool' and 'toolset_tool' are mutually exclusive. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool</a></code> | toolset_tool block. |

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.property.args"></a>

```typescript
public readonly args: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The input parameters and values for the tool in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#args GoogleCesEvaluation#args}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The unique identifier of the tool call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

The resource name of the tool. Note: 'tool' and 'toolset_tool' are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}

---

##### `toolsetTool`<sup>Optional</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool.property.toolset">toolset</a></code> | <code>string</code> | The resource name of the Toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool.property.toolId">toolId</a></code> | <code>string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

The resource name of the Toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}

---

##### `toolId`<sup>Optional</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationToolResponse: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.property.id">id</a></code> | <code>string</code> | The matching ID of the tool call the response is for. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.property.response">response</a></code> | <code>{[ key: string ]: string}</code> | The tool execution result in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.property.tool">tool</a></code> | <code>string</code> | The resource name of the tool. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool</a></code> | toolset_tool block. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.property.response"></a>

```typescript
public readonly response: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tool execution result in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#response GoogleCesEvaluation#response}

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

The resource name of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}

---

##### `toolsetTool`<sup>Optional</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool.property.toolset">toolset</a></code> | <code>string</code> | The resource name of the Toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool.property.toolId">toolId</a></code> | <code>string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

The resource name of the Toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}

---

##### `toolId`<sup>Optional</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables.property.notes">notes</a></code> | <code>string</code> | Dummy property. |

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

Dummy property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#notes GoogleCesEvaluation#notes}

---

### GoogleCesEvaluationGoldenTurnsStepsUserInput <a name="GoogleCesEvaluationGoldenTurnsStepsUserInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsUserInput: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.audio">audio</a></code> | <code>string</code> | Audio data from the end user. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.blob">blob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob">GoogleCesEvaluationGoldenTurnsStepsUserInputBlob</a></code> | blob block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.dtmf">dtmf</a></code> | <code>string</code> | DTMF digits from the end user. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.event">event</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent">GoogleCesEvaluationGoldenTurnsStepsUserInputEvent</a></code> | event block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.image">image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage">GoogleCesEvaluationGoldenTurnsStepsUserInputImage</a></code> | image block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.text">text</a></code> | <code>string</code> | Natural language query. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.toolResponses">toolResponses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses</a></code> | tool_responses block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | Map of variables to set. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.willContinue">willContinue</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the session should continue. |

---

##### `audio`<sup>Optional</sup> <a name="audio" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.audio"></a>

```typescript
public readonly audio: string;
```

- *Type:* string

Audio data from the end user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#audio GoogleCesEvaluation#audio}

---

##### `blob`<sup>Optional</sup> <a name="blob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.blob"></a>

```typescript
public readonly blob: GoogleCesEvaluationGoldenTurnsStepsUserInputBlob;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob">GoogleCesEvaluationGoldenTurnsStepsUserInputBlob</a>

blob block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#blob GoogleCesEvaluation#blob}

---

##### `dtmf`<sup>Optional</sup> <a name="dtmf" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.dtmf"></a>

```typescript
public readonly dtmf: string;
```

- *Type:* string

DTMF digits from the end user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#dtmf GoogleCesEvaluation#dtmf}

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.event"></a>

```typescript
public readonly event: GoogleCesEvaluationGoldenTurnsStepsUserInputEvent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent">GoogleCesEvaluationGoldenTurnsStepsUserInputEvent</a>

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#event GoogleCesEvaluation#event}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.image"></a>

```typescript
public readonly image: GoogleCesEvaluationGoldenTurnsStepsUserInputImage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage">GoogleCesEvaluationGoldenTurnsStepsUserInputImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#image GoogleCesEvaluation#image}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Natural language query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#text GoogleCesEvaluation#text}

---

##### `toolResponses`<sup>Optional</sup> <a name="toolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.toolResponses"></a>

```typescript
public readonly toolResponses: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses</a>

tool_responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_responses GoogleCesEvaluation#tool_responses}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of variables to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#variables GoogleCesEvaluation#variables}

---

##### `willContinue`<sup>Optional</sup> <a name="willContinue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.willContinue"></a>

```typescript
public readonly willContinue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the session should continue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#will_continue GoogleCesEvaluation#will_continue}

---

### GoogleCesEvaluationGoldenTurnsStepsUserInputBlob <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputBlob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsUserInputBlob: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob.property.data">data</a></code> | <code>string</code> | Raw bytes of the blob, base64-encoded. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob.property.mimeType">mimeType</a></code> | <code>string</code> | The IANA standard MIME type of the source data. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Raw bytes of the blob, base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#data GoogleCesEvaluation#data}

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

The IANA standard MIME type of the source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#mime_type GoogleCesEvaluation#mime_type}

---

### GoogleCesEvaluationGoldenTurnsStepsUserInputEvent <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputEvent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsUserInputEvent: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent.property.event">event</a></code> | <code>string</code> | Event name. |

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

Event name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#event GoogleCesEvaluation#event}

---

### GoogleCesEvaluationGoldenTurnsStepsUserInputImage <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputImage" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsUserInputImage: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage.property.data">data</a></code> | <code>string</code> | Raw bytes of the image, base64-encoded. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage.property.mimeType">mimeType</a></code> | <code>string</code> | The IANA standard MIME type of the source data. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Raw bytes of the image, base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#data GoogleCesEvaluation#data}

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

The IANA standard MIME type of the source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#mime_type GoogleCesEvaluation#mime_type}

---

### GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsUserInputToolResponses: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses.property.toolResponses">toolResponses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses</a>[]</code> | tool_responses block. |

---

##### `toolResponses`<sup>Optional</sup> <a name="toolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses.property.toolResponses"></a>

```typescript
public readonly toolResponses: IResolvable | GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses</a>[]

tool_responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_responses GoogleCesEvaluation#tool_responses}

---

### GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.property.response">response</a></code> | <code>{[ key: string ]: string}</code> | Required. The tool execution result in JSON. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.property.id">id</a></code> | <code>string</code> | Optional. Matching ID of the tool call. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.property.tool">tool</a></code> | <code>string</code> | Name of the tool to execute. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool</a></code> | toolset_tool block. |

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.property.response"></a>

```typescript
public readonly response: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Required. The tool execution result in JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#response GoogleCesEvaluation#response}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Optional. Matching ID of the tool call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

Name of the tool to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}

---

##### `toolsetTool`<sup>Optional</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}

---

### GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool: googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool.property.toolset">toolset</a></code> | <code>string</code> | The toolset name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool.property.toolId">toolId</a></code> | <code>string</code> | The tool ID. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

The toolset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}

---

##### `toolId`<sup>Optional</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

The tool ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}

---

### GoogleCesEvaluationTimeouts <a name="GoogleCesEvaluationTimeouts" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

const googleCesEvaluationTimeouts: googleCesEvaluation.GoogleCesEvaluationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#create GoogleCesEvaluation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#delete GoogleCesEvaluation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#update GoogleCesEvaluation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#create GoogleCesEvaluation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#delete GoogleCesEvaluation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#update GoogleCesEvaluation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesEvaluationGoldenOutputReference <a name="GoogleCesEvaluationGoldenOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.putTurns">putTurns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.resetEvaluationExpectations">resetEvaluationExpectations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTurns` <a name="putTurns" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.putTurns"></a>

```typescript
public putTurns(value: IResolvable | GoogleCesEvaluationGoldenTurns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.putTurns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns">GoogleCesEvaluationGoldenTurns</a>[]

---

##### `resetEvaluationExpectations` <a name="resetEvaluationExpectations" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.resetEvaluationExpectations"></a>

```typescript
public resetEvaluationExpectations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.turns">turns</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList">GoogleCesEvaluationGoldenTurnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.evaluationExpectationsInput">evaluationExpectationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.turnsInput">turnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns">GoogleCesEvaluationGoldenTurns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.evaluationExpectations">evaluationExpectations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden">GoogleCesEvaluationGolden</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `turns`<sup>Required</sup> <a name="turns" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.turns"></a>

```typescript
public readonly turns: GoogleCesEvaluationGoldenTurnsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList">GoogleCesEvaluationGoldenTurnsList</a>

---

##### `evaluationExpectationsInput`<sup>Optional</sup> <a name="evaluationExpectationsInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.evaluationExpectationsInput"></a>

```typescript
public readonly evaluationExpectationsInput: string[];
```

- *Type:* string[]

---

##### `turnsInput`<sup>Optional</sup> <a name="turnsInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.turnsInput"></a>

```typescript
public readonly turnsInput: IResolvable | GoogleCesEvaluationGoldenTurns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns">GoogleCesEvaluationGoldenTurns</a>[]

---

##### `evaluationExpectations`<sup>Required</sup> <a name="evaluationExpectations" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.evaluationExpectations"></a>

```typescript
public readonly evaluationExpectations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGolden;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden">GoogleCesEvaluationGolden</a>

---


### GoogleCesEvaluationGoldenTurnsList <a name="GoogleCesEvaluationGoldenTurnsList" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.get"></a>

```typescript
public get(index: number): GoogleCesEvaluationGoldenTurnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns">GoogleCesEvaluationGoldenTurns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesEvaluationGoldenTurns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns">GoogleCesEvaluationGoldenTurns</a>[]

---


### GoogleCesEvaluationGoldenTurnsOutputReference <a name="GoogleCesEvaluationGoldenTurnsOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.putSteps">putSteps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSteps` <a name="putSteps" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.putSteps"></a>

```typescript
public putSteps(value: IResolvable | GoogleCesEvaluationGoldenTurnsSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.putSteps.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps">GoogleCesEvaluationGoldenTurnsSteps</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.rootSpan">rootSpan</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList">GoogleCesEvaluationGoldenTurnsRootSpanList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList">GoogleCesEvaluationGoldenTurnsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.stepsInput">stepsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps">GoogleCesEvaluationGoldenTurnsSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns">GoogleCesEvaluationGoldenTurns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rootSpan`<sup>Required</sup> <a name="rootSpan" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.rootSpan"></a>

```typescript
public readonly rootSpan: GoogleCesEvaluationGoldenTurnsRootSpanList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList">GoogleCesEvaluationGoldenTurnsRootSpanList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.steps"></a>

```typescript
public readonly steps: GoogleCesEvaluationGoldenTurnsStepsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList">GoogleCesEvaluationGoldenTurnsStepsList</a>

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.stepsInput"></a>

```typescript
public readonly stepsInput: IResolvable | GoogleCesEvaluationGoldenTurnsSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps">GoogleCesEvaluationGoldenTurnsSteps</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesEvaluationGoldenTurns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns">GoogleCesEvaluationGoldenTurns</a>

---


### GoogleCesEvaluationGoldenTurnsRootSpanList <a name="GoogleCesEvaluationGoldenTurnsRootSpanList" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.get"></a>

```typescript
public get(index: number): GoogleCesEvaluationGoldenTurnsRootSpanOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleCesEvaluationGoldenTurnsRootSpanOutputReference <a name="GoogleCesEvaluationGoldenTurnsRootSpanOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.childSpans">childSpans</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpan">GoogleCesEvaluationGoldenTurnsRootSpan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `childSpans`<sup>Required</sup> <a name="childSpans" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.childSpans"></a>

```typescript
public readonly childSpans: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsRootSpan;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpan">GoogleCesEvaluationGoldenTurnsRootSpan</a>

---


### GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.targetAgentInput">targetAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.targetAgent">targetAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsAgentTransfer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `targetAgentInput`<sup>Optional</sup> <a name="targetAgentInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.targetAgentInput"></a>

```typescript
public readonly targetAgentInput: string;
```

- *Type:* string

---

##### `targetAgent`<sup>Required</sup> <a name="targetAgent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.targetAgent"></a>

```typescript
public readonly targetAgent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsAgentTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsAgentTransfer</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.targetAgentInput">targetAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.targetAgent">targetAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `targetAgentInput`<sup>Optional</sup> <a name="targetAgentInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.targetAgentInput"></a>

```typescript
public readonly targetAgentInput: string;
```

- *Type:* string

---

##### `targetAgent`<sup>Required</sup> <a name="targetAgent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.targetAgent"></a>

```typescript
public readonly targetAgent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.mimeTypeInput">mimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `mimeTypeInput`<sup>Optional</sup> <a name="mimeTypeInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.mimeTypeInput"></a>

```typescript
public readonly mimeTypeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.mimeTypeInput">mimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `mimeTypeInput`<sup>Optional</sup> <a name="mimeTypeInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.mimeTypeInput"></a>

```typescript
public readonly mimeTypeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.get"></a>

```typescript
public get(index: number): GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks</a>[]

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putAgentTransfer">putAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putBlob">putBlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putImage">putImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putToolCall">putToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putToolResponse">putToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetAgentTransfer">resetAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetBlob">resetBlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetToolCall">resetToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetToolResponse">resetToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetUpdatedVariables">resetUpdatedVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentTransfer` <a name="putAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putAgentTransfer"></a>

```typescript
public putAgentTransfer(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putAgentTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer</a>

---

##### `putBlob` <a name="putBlob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putBlob"></a>

```typescript
public putBlob(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putBlob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob</a>

---

##### `putImage` <a name="putImage" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putImage"></a>

```typescript
public putImage(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage</a>

---

##### `putToolCall` <a name="putToolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putToolCall"></a>

```typescript
public putToolCall(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putToolCall.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall</a>

---

##### `putToolResponse` <a name="putToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putToolResponse"></a>

```typescript
public putToolResponse(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putToolResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse</a>

---

##### `resetAgentTransfer` <a name="resetAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetAgentTransfer"></a>

```typescript
public resetAgentTransfer(): void
```

##### `resetBlob` <a name="resetBlob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetBlob"></a>

```typescript
public resetBlob(): void
```

##### `resetImage` <a name="resetImage" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetToolCall` <a name="resetToolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetToolCall"></a>

```typescript
public resetToolCall(): void
```

##### `resetToolResponse` <a name="resetToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetToolResponse"></a>

```typescript
public resetToolResponse(): void
```

##### `resetUpdatedVariables` <a name="resetUpdatedVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetUpdatedVariables"></a>

```typescript
public resetUpdatedVariables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.agentTransfer">agentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.blob">blob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.image">image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.toolCall">toolCall</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.toolResponse">toolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.agentTransferInput">agentTransferInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.blobInput">blobInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.imageInput">imageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.toolCallInput">toolCallInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.toolResponseInput">toolResponseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.updatedVariablesInput">updatedVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.updatedVariables">updatedVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentTransfer`<sup>Required</sup> <a name="agentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.agentTransfer"></a>

```typescript
public readonly agentTransfer: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference</a>

---

##### `blob`<sup>Required</sup> <a name="blob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.blob"></a>

```typescript
public readonly blob: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.image"></a>

```typescript
public readonly image: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference</a>

---

##### `toolCall`<sup>Required</sup> <a name="toolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.toolCall"></a>

```typescript
public readonly toolCall: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference</a>

---

##### `toolResponse`<sup>Required</sup> <a name="toolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.toolResponse"></a>

```typescript
public readonly toolResponse: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference</a>

---

##### `agentTransferInput`<sup>Optional</sup> <a name="agentTransferInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.agentTransferInput"></a>

```typescript
public readonly agentTransferInput: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer</a>

---

##### `blobInput`<sup>Optional</sup> <a name="blobInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.blobInput"></a>

```typescript
public readonly blobInput: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob</a>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `toolCallInput`<sup>Optional</sup> <a name="toolCallInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.toolCallInput"></a>

```typescript
public readonly toolCallInput: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall</a>

---

##### `toolResponseInput`<sup>Optional</sup> <a name="toolResponseInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.toolResponseInput"></a>

```typescript
public readonly toolResponseInput: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse</a>

---

##### `updatedVariablesInput`<sup>Optional</sup> <a name="updatedVariablesInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.updatedVariablesInput"></a>

```typescript
public readonly updatedVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `updatedVariables`<sup>Required</sup> <a name="updatedVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.updatedVariables"></a>

```typescript
public readonly updatedVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.putToolsetTool">putToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resetTool">resetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resetToolsetTool">resetToolsetTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putToolsetTool` <a name="putToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.putToolsetTool"></a>

```typescript
public putToolsetTool(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool</a>

---

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTool` <a name="resetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resetTool"></a>

```typescript
public resetTool(): void
```

##### `resetToolsetTool` <a name="resetToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resetToolsetTool"></a>

```typescript
public resetToolsetTool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.argsInput">argsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.toolInput">toolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.toolsetToolInput">toolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.args">args</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.tool">tool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `toolsetTool`<sup>Required</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.toolInput"></a>

```typescript
public readonly toolInput: string;
```

- *Type:* string

---

##### `toolsetToolInput`<sup>Optional</sup> <a name="toolsetToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.toolsetToolInput"></a>

```typescript
public readonly toolsetToolInput: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool</a>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.args"></a>

```typescript
public readonly args: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.resetToolId">resetToolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolId` <a name="resetToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.resetToolId"></a>

```typescript
public resetToolId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.toolIdInput">toolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.toolId">toolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.toolset">toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.toolIdInput"></a>

```typescript
public readonly toolIdInput: string;
```

- *Type:* string

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.toolsetInput"></a>

```typescript
public readonly toolsetInput: string;
```

- *Type:* string

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.putToolsetTool">putToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resetResponse">resetResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resetTool">resetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resetToolsetTool">resetToolsetTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putToolsetTool` <a name="putToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.putToolsetTool"></a>

```typescript
public putToolsetTool(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```

##### `resetTool` <a name="resetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resetTool"></a>

```typescript
public resetTool(): void
```

##### `resetToolsetTool` <a name="resetToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resetToolsetTool"></a>

```typescript
public resetToolsetTool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.responseInput">responseInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.toolInput">toolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.toolsetToolInput">toolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.response">response</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.tool">tool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `toolsetTool`<sup>Required</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.toolInput"></a>

```typescript
public readonly toolInput: string;
```

- *Type:* string

---

##### `toolsetToolInput`<sup>Optional</sup> <a name="toolsetToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.toolsetToolInput"></a>

```typescript
public readonly toolsetToolInput: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.response"></a>

```typescript
public readonly response: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.resetToolId">resetToolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolId` <a name="resetToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.resetToolId"></a>

```typescript
public resetToolId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.toolIdInput">toolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.toolId">toolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.toolset">toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.toolIdInput"></a>

```typescript
public readonly toolIdInput: string;
```

- *Type:* string

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.toolsetInput"></a>

```typescript
public readonly toolsetInput: string;
```

- *Type:* string

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.putChunks">putChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.resetChunks">resetChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.resetRole">resetRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChunks` <a name="putChunks" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.putChunks"></a>

```typescript
public putChunks(value: IResolvable | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.putChunks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks</a>[]

---

##### `resetChunks` <a name="resetChunks" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.resetChunks"></a>

```typescript
public resetChunks(): void
```

##### `resetRole` <a name="resetRole" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.chunks">chunks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.chunksInput">chunksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chunks`<sup>Required</sup> <a name="chunks" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.chunks"></a>

```typescript
public readonly chunks: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList</a>

---

##### `chunksInput`<sup>Optional</sup> <a name="chunksInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.chunksInput"></a>

```typescript
public readonly chunksInput: IResolvable | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks</a>[]

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.resetTargetAgent">resetTargetAgent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetTargetAgent` <a name="resetTargetAgent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.resetTargetAgent"></a>

```typescript
public resetTargetAgent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.targetAgentInput">targetAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.targetAgent">targetAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `targetAgentInput`<sup>Optional</sup> <a name="targetAgentInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.targetAgentInput"></a>

```typescript
public readonly targetAgentInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `targetAgent`<sup>Required</sup> <a name="targetAgent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.targetAgent"></a>

```typescript
public readonly targetAgent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.putToolsetTool">putToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resetResponse">resetResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resetTool">resetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resetToolsetTool">resetToolsetTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putToolsetTool` <a name="putToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.putToolsetTool"></a>

```typescript
public putToolsetTool(value: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```

##### `resetTool` <a name="resetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resetTool"></a>

```typescript
public resetTool(): void
```

##### `resetToolsetTool` <a name="resetToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resetToolsetTool"></a>

```typescript
public resetToolsetTool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.responseInput">responseInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.toolInput">toolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.toolsetToolInput">toolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.response">response</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.tool">tool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `toolsetTool`<sup>Required</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.toolInput"></a>

```typescript
public readonly toolInput: string;
```

- *Type:* string

---

##### `toolsetToolInput`<sup>Optional</sup> <a name="toolsetToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.toolsetToolInput"></a>

```typescript
public readonly toolsetToolInput: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.response"></a>

```typescript
public readonly response: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.resetToolId">resetToolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolId` <a name="resetToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.resetToolId"></a>

```typescript
public resetToolId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.toolIdInput">toolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.toolId">toolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.toolset">toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.toolIdInput"></a>

```typescript
public readonly toolIdInput: string;
```

- *Type:* string

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.toolsetInput"></a>

```typescript
public readonly toolsetInput: string;
```

- *Type:* string

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putAgentResponse">putAgentResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putAgentTransfer">putAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putMockToolResponse">putMockToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putToolCall">putToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putToolResponse">putToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putUpdatedVariables">putUpdatedVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetAgentResponse">resetAgentResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetAgentTransfer">resetAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetMockToolResponse">resetMockToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetNote">resetNote</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetToolCall">resetToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetToolResponse">resetToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetUpdatedVariables">resetUpdatedVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentResponse` <a name="putAgentResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putAgentResponse"></a>

```typescript
public putAgentResponse(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putAgentResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse</a>

---

##### `putAgentTransfer` <a name="putAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putAgentTransfer"></a>

```typescript
public putAgentTransfer(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putAgentTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer</a>

---

##### `putMockToolResponse` <a name="putMockToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putMockToolResponse"></a>

```typescript
public putMockToolResponse(value: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putMockToolResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse</a>

---

##### `putToolCall` <a name="putToolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putToolCall"></a>

```typescript
public putToolCall(value: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putToolCall.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall</a>

---

##### `putToolResponse` <a name="putToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putToolResponse"></a>

```typescript
public putToolResponse(value: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putToolResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse</a>

---

##### `putUpdatedVariables` <a name="putUpdatedVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putUpdatedVariables"></a>

```typescript
public putUpdatedVariables(value: GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putUpdatedVariables.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables</a>

---

##### `resetAgentResponse` <a name="resetAgentResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetAgentResponse"></a>

```typescript
public resetAgentResponse(): void
```

##### `resetAgentTransfer` <a name="resetAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetAgentTransfer"></a>

```typescript
public resetAgentTransfer(): void
```

##### `resetMockToolResponse` <a name="resetMockToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetMockToolResponse"></a>

```typescript
public resetMockToolResponse(): void
```

##### `resetNote` <a name="resetNote" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetNote"></a>

```typescript
public resetNote(): void
```

##### `resetToolCall` <a name="resetToolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetToolCall"></a>

```typescript
public resetToolCall(): void
```

##### `resetToolResponse` <a name="resetToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetToolResponse"></a>

```typescript
public resetToolResponse(): void
```

##### `resetUpdatedVariables` <a name="resetUpdatedVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetUpdatedVariables"></a>

```typescript
public resetUpdatedVariables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.agentResponse">agentResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.agentTransfer">agentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.mockToolResponse">mockToolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.toolCall">toolCall</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.toolResponse">toolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.updatedVariables">updatedVariables</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.agentResponseInput">agentResponseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.agentTransferInput">agentTransferInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.mockToolResponseInput">mockToolResponseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.noteInput">noteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.toolCallInput">toolCallInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.toolResponseInput">toolResponseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.updatedVariablesInput">updatedVariablesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.note">note</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation">GoogleCesEvaluationGoldenTurnsStepsExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentResponse`<sup>Required</sup> <a name="agentResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.agentResponse"></a>

```typescript
public readonly agentResponse: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference</a>

---

##### `agentTransfer`<sup>Required</sup> <a name="agentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.agentTransfer"></a>

```typescript
public readonly agentTransfer: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference</a>

---

##### `mockToolResponse`<sup>Required</sup> <a name="mockToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.mockToolResponse"></a>

```typescript
public readonly mockToolResponse: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference</a>

---

##### `toolCall`<sup>Required</sup> <a name="toolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.toolCall"></a>

```typescript
public readonly toolCall: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference</a>

---

##### `toolResponse`<sup>Required</sup> <a name="toolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.toolResponse"></a>

```typescript
public readonly toolResponse: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference</a>

---

##### `updatedVariables`<sup>Required</sup> <a name="updatedVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.updatedVariables"></a>

```typescript
public readonly updatedVariables: GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference</a>

---

##### `agentResponseInput`<sup>Optional</sup> <a name="agentResponseInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.agentResponseInput"></a>

```typescript
public readonly agentResponseInput: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse</a>

---

##### `agentTransferInput`<sup>Optional</sup> <a name="agentTransferInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.agentTransferInput"></a>

```typescript
public readonly agentTransferInput: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer</a>

---

##### `mockToolResponseInput`<sup>Optional</sup> <a name="mockToolResponseInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.mockToolResponseInput"></a>

```typescript
public readonly mockToolResponseInput: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse</a>

---

##### `noteInput`<sup>Optional</sup> <a name="noteInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.noteInput"></a>

```typescript
public readonly noteInput: string;
```

- *Type:* string

---

##### `toolCallInput`<sup>Optional</sup> <a name="toolCallInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.toolCallInput"></a>

```typescript
public readonly toolCallInput: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall</a>

---

##### `toolResponseInput`<sup>Optional</sup> <a name="toolResponseInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.toolResponseInput"></a>

```typescript
public readonly toolResponseInput: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse</a>

---

##### `updatedVariablesInput`<sup>Optional</sup> <a name="updatedVariablesInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.updatedVariablesInput"></a>

```typescript
public readonly updatedVariablesInput: GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables</a>

---

##### `note`<sup>Required</sup> <a name="note" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.note"></a>

```typescript
public readonly note: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectation;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation">GoogleCesEvaluationGoldenTurnsStepsExpectation</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.putToolsetTool">putToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resetTool">resetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resetToolsetTool">resetToolsetTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putToolsetTool` <a name="putToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.putToolsetTool"></a>

```typescript
public putToolsetTool(value: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool</a>

---

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTool` <a name="resetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resetTool"></a>

```typescript
public resetTool(): void
```

##### `resetToolsetTool` <a name="resetToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resetToolsetTool"></a>

```typescript
public resetToolsetTool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.argsInput">argsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.toolInput">toolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.toolsetToolInput">toolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.args">args</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.tool">tool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `toolsetTool`<sup>Required</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.toolInput"></a>

```typescript
public readonly toolInput: string;
```

- *Type:* string

---

##### `toolsetToolInput`<sup>Optional</sup> <a name="toolsetToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.toolsetToolInput"></a>

```typescript
public readonly toolsetToolInput: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool</a>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.args"></a>

```typescript
public readonly args: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.resetToolId">resetToolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolId` <a name="resetToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.resetToolId"></a>

```typescript
public resetToolId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.toolIdInput">toolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.toolId">toolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.toolset">toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.toolIdInput"></a>

```typescript
public readonly toolIdInput: string;
```

- *Type:* string

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.toolsetInput"></a>

```typescript
public readonly toolsetInput: string;
```

- *Type:* string

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.putToolsetTool">putToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resetResponse">resetResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resetTool">resetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resetToolsetTool">resetToolsetTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putToolsetTool` <a name="putToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.putToolsetTool"></a>

```typescript
public putToolsetTool(value: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```

##### `resetTool` <a name="resetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resetTool"></a>

```typescript
public resetTool(): void
```

##### `resetToolsetTool` <a name="resetToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resetToolsetTool"></a>

```typescript
public resetToolsetTool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.responseInput">responseInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.toolInput">toolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.toolsetToolInput">toolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.response">response</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.tool">tool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `toolsetTool`<sup>Required</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.toolInput"></a>

```typescript
public readonly toolInput: string;
```

- *Type:* string

---

##### `toolsetToolInput`<sup>Optional</sup> <a name="toolsetToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.toolsetToolInput"></a>

```typescript
public readonly toolsetToolInput: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.response"></a>

```typescript
public readonly response: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.resetToolId">resetToolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolId` <a name="resetToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.resetToolId"></a>

```typescript
public resetToolId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.toolIdInput">toolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.toolId">toolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.toolset">toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.toolIdInput"></a>

```typescript
public readonly toolIdInput: string;
```

- *Type:* string

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.toolsetInput"></a>

```typescript
public readonly toolsetInput: string;
```

- *Type:* string

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.resetNotes">resetNotes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNotes` <a name="resetNotes" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.resetNotes"></a>

```typescript
public resetNotes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.notesInput">notesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables</a>

---


### GoogleCesEvaluationGoldenTurnsStepsList <a name="GoogleCesEvaluationGoldenTurnsStepsList" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.get"></a>

```typescript
public get(index: number): GoogleCesEvaluationGoldenTurnsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps">GoogleCesEvaluationGoldenTurnsSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesEvaluationGoldenTurnsSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps">GoogleCesEvaluationGoldenTurnsSteps</a>[]

---


### GoogleCesEvaluationGoldenTurnsStepsOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putAgentTransfer">putAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putExpectation">putExpectation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putUserInput">putUserInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resetAgentTransfer">resetAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resetExpectation">resetExpectation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resetUserInput">resetUserInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentTransfer` <a name="putAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putAgentTransfer"></a>

```typescript
public putAgentTransfer(value: GoogleCesEvaluationGoldenTurnsStepsAgentTransfer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putAgentTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsAgentTransfer</a>

---

##### `putExpectation` <a name="putExpectation" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putExpectation"></a>

```typescript
public putExpectation(value: GoogleCesEvaluationGoldenTurnsStepsExpectation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation">GoogleCesEvaluationGoldenTurnsStepsExpectation</a>

---

##### `putUserInput` <a name="putUserInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putUserInput"></a>

```typescript
public putUserInput(value: GoogleCesEvaluationGoldenTurnsStepsUserInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putUserInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput">GoogleCesEvaluationGoldenTurnsStepsUserInput</a>

---

##### `resetAgentTransfer` <a name="resetAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resetAgentTransfer"></a>

```typescript
public resetAgentTransfer(): void
```

##### `resetExpectation` <a name="resetExpectation" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resetExpectation"></a>

```typescript
public resetExpectation(): void
```

##### `resetUserInput` <a name="resetUserInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resetUserInput"></a>

```typescript
public resetUserInput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.agentTransfer">agentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference">GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.expectation">expectation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.userInput">userInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.agentTransferInput">agentTransferInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.expectationInput">expectationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation">GoogleCesEvaluationGoldenTurnsStepsExpectation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.userInputInput">userInputInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput">GoogleCesEvaluationGoldenTurnsStepsUserInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps">GoogleCesEvaluationGoldenTurnsSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentTransfer`<sup>Required</sup> <a name="agentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.agentTransfer"></a>

```typescript
public readonly agentTransfer: GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference">GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference</a>

---

##### `expectation`<sup>Required</sup> <a name="expectation" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.expectation"></a>

```typescript
public readonly expectation: GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference</a>

---

##### `userInput`<sup>Required</sup> <a name="userInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.userInput"></a>

```typescript
public readonly userInput: GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference</a>

---

##### `agentTransferInput`<sup>Optional</sup> <a name="agentTransferInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.agentTransferInput"></a>

```typescript
public readonly agentTransferInput: GoogleCesEvaluationGoldenTurnsStepsAgentTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsAgentTransfer</a>

---

##### `expectationInput`<sup>Optional</sup> <a name="expectationInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.expectationInput"></a>

```typescript
public readonly expectationInput: GoogleCesEvaluationGoldenTurnsStepsExpectation;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation">GoogleCesEvaluationGoldenTurnsStepsExpectation</a>

---

##### `userInputInput`<sup>Optional</sup> <a name="userInputInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.userInputInput"></a>

```typescript
public readonly userInputInput: GoogleCesEvaluationGoldenTurnsStepsUserInput;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput">GoogleCesEvaluationGoldenTurnsStepsUserInput</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesEvaluationGoldenTurnsSteps;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps">GoogleCesEvaluationGoldenTurnsSteps</a>

---


### GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.mimeTypeInput">mimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob">GoogleCesEvaluationGoldenTurnsStepsUserInputBlob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `mimeTypeInput`<sup>Optional</sup> <a name="mimeTypeInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.mimeTypeInput"></a>

```typescript
public readonly mimeTypeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsUserInputBlob;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob">GoogleCesEvaluationGoldenTurnsStepsUserInputBlob</a>

---


### GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.eventInput">eventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.event">event</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent">GoogleCesEvaluationGoldenTurnsStepsUserInputEvent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.eventInput"></a>

```typescript
public readonly eventInput: string;
```

- *Type:* string

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsUserInputEvent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent">GoogleCesEvaluationGoldenTurnsStepsUserInputEvent</a>

---


### GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.mimeTypeInput">mimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage">GoogleCesEvaluationGoldenTurnsStepsUserInputImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `mimeTypeInput`<sup>Optional</sup> <a name="mimeTypeInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.mimeTypeInput"></a>

```typescript
public readonly mimeTypeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsUserInputImage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage">GoogleCesEvaluationGoldenTurnsStepsUserInputImage</a>

---


### GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putBlob">putBlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putEvent">putEvent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putImage">putImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putToolResponses">putToolResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetAudio">resetAudio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetBlob">resetBlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetDtmf">resetDtmf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetEvent">resetEvent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetToolResponses">resetToolResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetVariables">resetVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetWillContinue">resetWillContinue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBlob` <a name="putBlob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putBlob"></a>

```typescript
public putBlob(value: GoogleCesEvaluationGoldenTurnsStepsUserInputBlob): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putBlob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob">GoogleCesEvaluationGoldenTurnsStepsUserInputBlob</a>

---

##### `putEvent` <a name="putEvent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putEvent"></a>

```typescript
public putEvent(value: GoogleCesEvaluationGoldenTurnsStepsUserInputEvent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putEvent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent">GoogleCesEvaluationGoldenTurnsStepsUserInputEvent</a>

---

##### `putImage` <a name="putImage" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putImage"></a>

```typescript
public putImage(value: GoogleCesEvaluationGoldenTurnsStepsUserInputImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage">GoogleCesEvaluationGoldenTurnsStepsUserInputImage</a>

---

##### `putToolResponses` <a name="putToolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putToolResponses"></a>

```typescript
public putToolResponses(value: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putToolResponses.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses</a>

---

##### `resetAudio` <a name="resetAudio" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetAudio"></a>

```typescript
public resetAudio(): void
```

##### `resetBlob` <a name="resetBlob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetBlob"></a>

```typescript
public resetBlob(): void
```

##### `resetDtmf` <a name="resetDtmf" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetDtmf"></a>

```typescript
public resetDtmf(): void
```

##### `resetEvent` <a name="resetEvent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetEvent"></a>

```typescript
public resetEvent(): void
```

##### `resetImage` <a name="resetImage" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetToolResponses` <a name="resetToolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetToolResponses"></a>

```typescript
public resetToolResponses(): void
```

##### `resetVariables` <a name="resetVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetVariables"></a>

```typescript
public resetVariables(): void
```

##### `resetWillContinue` <a name="resetWillContinue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetWillContinue"></a>

```typescript
public resetWillContinue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.blob">blob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.event">event</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.image">image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.toolResponses">toolResponses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.audioInput">audioInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.blobInput">blobInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob">GoogleCesEvaluationGoldenTurnsStepsUserInputBlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.dtmfInput">dtmfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.eventInput">eventInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent">GoogleCesEvaluationGoldenTurnsStepsUserInputEvent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.imageInput">imageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage">GoogleCesEvaluationGoldenTurnsStepsUserInputImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.toolResponsesInput">toolResponsesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.variablesInput">variablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.willContinueInput">willContinueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.audio">audio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.dtmf">dtmf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.willContinue">willContinue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput">GoogleCesEvaluationGoldenTurnsStepsUserInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blob`<sup>Required</sup> <a name="blob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.blob"></a>

```typescript
public readonly blob: GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference</a>

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.event"></a>

```typescript
public readonly event: GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.image"></a>

```typescript
public readonly image: GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference</a>

---

##### `toolResponses`<sup>Required</sup> <a name="toolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.toolResponses"></a>

```typescript
public readonly toolResponses: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference</a>

---

##### `audioInput`<sup>Optional</sup> <a name="audioInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.audioInput"></a>

```typescript
public readonly audioInput: string;
```

- *Type:* string

---

##### `blobInput`<sup>Optional</sup> <a name="blobInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.blobInput"></a>

```typescript
public readonly blobInput: GoogleCesEvaluationGoldenTurnsStepsUserInputBlob;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob">GoogleCesEvaluationGoldenTurnsStepsUserInputBlob</a>

---

##### `dtmfInput`<sup>Optional</sup> <a name="dtmfInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.dtmfInput"></a>

```typescript
public readonly dtmfInput: string;
```

- *Type:* string

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.eventInput"></a>

```typescript
public readonly eventInput: GoogleCesEvaluationGoldenTurnsStepsUserInputEvent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent">GoogleCesEvaluationGoldenTurnsStepsUserInputEvent</a>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: GoogleCesEvaluationGoldenTurnsStepsUserInputImage;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage">GoogleCesEvaluationGoldenTurnsStepsUserInputImage</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `toolResponsesInput`<sup>Optional</sup> <a name="toolResponsesInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.toolResponsesInput"></a>

```typescript
public readonly toolResponsesInput: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses</a>

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.variablesInput"></a>

```typescript
public readonly variablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `willContinueInput`<sup>Optional</sup> <a name="willContinueInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.willContinueInput"></a>

```typescript
public readonly willContinueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `audio`<sup>Required</sup> <a name="audio" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.audio"></a>

```typescript
public readonly audio: string;
```

- *Type:* string

---

##### `dtmf`<sup>Required</sup> <a name="dtmf" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.dtmf"></a>

```typescript
public readonly dtmf: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `willContinue`<sup>Required</sup> <a name="willContinue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.willContinue"></a>

```typescript
public readonly willContinue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsUserInput;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput">GoogleCesEvaluationGoldenTurnsStepsUserInput</a>

---


### GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.putToolResponses">putToolResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.resetToolResponses">resetToolResponses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putToolResponses` <a name="putToolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.putToolResponses"></a>

```typescript
public putToolResponses(value: IResolvable | GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.putToolResponses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses</a>[]

---

##### `resetToolResponses` <a name="resetToolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.resetToolResponses"></a>

```typescript
public resetToolResponses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.toolResponses">toolResponses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.toolResponsesInput">toolResponsesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `toolResponses`<sup>Required</sup> <a name="toolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.toolResponses"></a>

```typescript
public readonly toolResponses: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList</a>

---

##### `toolResponsesInput`<sup>Optional</sup> <a name="toolResponsesInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.toolResponsesInput"></a>

```typescript
public readonly toolResponsesInput: IResolvable | GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses</a>

---


### GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.get"></a>

```typescript
public get(index: number): GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses</a>[]

---


### GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.putToolsetTool">putToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resetTool">resetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resetToolsetTool">resetToolsetTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putToolsetTool` <a name="putToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.putToolsetTool"></a>

```typescript
public putToolsetTool(value: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTool` <a name="resetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resetTool"></a>

```typescript
public resetTool(): void
```

##### `resetToolsetTool` <a name="resetToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resetToolsetTool"></a>

```typescript
public resetToolsetTool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.responseInput">responseInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.toolInput">toolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.toolsetToolInput">toolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.response">response</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.tool">tool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `toolsetTool`<sup>Required</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.toolInput"></a>

```typescript
public readonly toolInput: string;
```

- *Type:* string

---

##### `toolsetToolInput`<sup>Optional</sup> <a name="toolsetToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.toolsetToolInput"></a>

```typescript
public readonly toolsetToolInput: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.response"></a>

```typescript
public readonly response: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses</a>

---


### GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.resetToolId">resetToolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolId` <a name="resetToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.resetToolId"></a>

```typescript
public resetToolId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.toolIdInput">toolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.toolId">toolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.toolset">toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.toolIdInput"></a>

```typescript
public readonly toolIdInput: string;
```

- *Type:* string

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.toolsetInput"></a>

```typescript
public readonly toolsetInput: string;
```

- *Type:* string

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool</a>

---


### GoogleCesEvaluationTimeoutsOutputReference <a name="GoogleCesEvaluationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCesEvaluation } from '@cdktn/provider-google-beta'

new googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts">GoogleCesEvaluationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesEvaluationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts">GoogleCesEvaluationTimeouts</a>

---



