# `googleEventarcPipelineIamBinding` Submodule <a name="`googleEventarcPipelineIamBinding` Submodule" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEventarcPipelineIamBinding <a name="GoogleEventarcPipelineIamBinding" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding google_eventarc_pipeline_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.Initializer"></a>

```typescript
import { googleEventarcPipelineIamBinding } from '@cdktn/provider-google-beta'

new googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding(scope: Construct, id: string, config: GoogleEventarcPipelineIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig">GoogleEventarcPipelineIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig">GoogleEventarcPipelineIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.putCondition"></a>

```typescript
public putCondition(value: GoogleEventarcPipelineIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition">GoogleEventarcPipelineIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleEventarcPipelineIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isConstruct"></a>

```typescript
import { googleEventarcPipelineIamBinding } from '@cdktn/provider-google-beta'

googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isTerraformElement"></a>

```typescript
import { googleEventarcPipelineIamBinding } from '@cdktn/provider-google-beta'

googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isTerraformResource"></a>

```typescript
import { googleEventarcPipelineIamBinding } from '@cdktn/provider-google-beta'

googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.generateConfigForImport"></a>

```typescript
import { googleEventarcPipelineIamBinding } from '@cdktn/provider-google-beta'

googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleEventarcPipelineIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleEventarcPipelineIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleEventarcPipelineIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleEventarcPipelineIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference">GoogleEventarcPipelineIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition">GoogleEventarcPipelineIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.pipelineIdInput">pipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.condition"></a>

```typescript
public readonly condition: GoogleEventarcPipelineIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference">GoogleEventarcPipelineIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleEventarcPipelineIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition">GoogleEventarcPipelineIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.pipelineIdInput"></a>

```typescript
public readonly pipelineIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEventarcPipelineIamBindingCondition <a name="GoogleEventarcPipelineIamBindingCondition" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition.Initializer"></a>

```typescript
import { googleEventarcPipelineIamBinding } from '@cdktn/provider-google-beta'

const googleEventarcPipelineIamBindingCondition: googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#expression GoogleEventarcPipelineIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#title GoogleEventarcPipelineIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#description GoogleEventarcPipelineIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#expression GoogleEventarcPipelineIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#title GoogleEventarcPipelineIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#description GoogleEventarcPipelineIamBinding#description}.

---

### GoogleEventarcPipelineIamBindingConfig <a name="GoogleEventarcPipelineIamBindingConfig" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.Initializer"></a>

```typescript
import { googleEventarcPipelineIamBinding } from '@cdktn/provider-google-beta'

const googleEventarcPipelineIamBindingConfig: googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#members GoogleEventarcPipelineIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.pipelineId">pipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#pipeline_id GoogleEventarcPipelineIamBinding#pipeline_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#role GoogleEventarcPipelineIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition">GoogleEventarcPipelineIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#id GoogleEventarcPipelineIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#location GoogleEventarcPipelineIamBinding#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#project GoogleEventarcPipelineIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#members GoogleEventarcPipelineIamBinding#members}.

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#pipeline_id GoogleEventarcPipelineIamBinding#pipeline_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#role GoogleEventarcPipelineIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: GoogleEventarcPipelineIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition">GoogleEventarcPipelineIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#condition GoogleEventarcPipelineIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#id GoogleEventarcPipelineIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#location GoogleEventarcPipelineIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#project GoogleEventarcPipelineIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEventarcPipelineIamBindingConditionOutputReference <a name="GoogleEventarcPipelineIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { googleEventarcPipelineIamBinding } from '@cdktn/provider-google-beta'

new googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition">GoogleEventarcPipelineIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEventarcPipelineIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition">GoogleEventarcPipelineIamBindingCondition</a>

---



