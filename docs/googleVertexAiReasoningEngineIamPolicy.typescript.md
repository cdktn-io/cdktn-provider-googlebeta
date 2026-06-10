# `googleVertexAiReasoningEngineIamPolicy` Submodule <a name="`googleVertexAiReasoningEngineIamPolicy` Submodule" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiReasoningEngineIamPolicy <a name="GoogleVertexAiReasoningEngineIamPolicy" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine_iam_policy google_vertex_ai_reasoning_engine_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.Initializer"></a>

```typescript
import { googleVertexAiReasoningEngineIamPolicy } from '@cdktn/provider-google-beta'

new googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy(scope: Construct, id: string, config: GoogleVertexAiReasoningEngineIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig">GoogleVertexAiReasoningEngineIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig">GoogleVertexAiReasoningEngineIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiReasoningEngineIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.isConstruct"></a>

```typescript
import { googleVertexAiReasoningEngineIamPolicy } from '@cdktn/provider-google-beta'

googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.isTerraformElement"></a>

```typescript
import { googleVertexAiReasoningEngineIamPolicy } from '@cdktn/provider-google-beta'

googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.isTerraformResource"></a>

```typescript
import { googleVertexAiReasoningEngineIamPolicy } from '@cdktn/provider-google-beta'

googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.generateConfigForImport"></a>

```typescript
import { googleVertexAiReasoningEngineIamPolicy } from '@cdktn/provider-google-beta'

googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleVertexAiReasoningEngineIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiReasoningEngineIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiReasoningEngineIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiReasoningEngineIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.reasoningEngineInput">reasoningEngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.reasoningEngine">reasoningEngine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `reasoningEngineInput`<sup>Optional</sup> <a name="reasoningEngineInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.reasoningEngineInput"></a>

```typescript
public readonly reasoningEngineInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `reasoningEngine`<sup>Required</sup> <a name="reasoningEngine" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.reasoningEngine"></a>

```typescript
public readonly reasoningEngine: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiReasoningEngineIamPolicyConfig <a name="GoogleVertexAiReasoningEngineIamPolicyConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.Initializer"></a>

```typescript
import { googleVertexAiReasoningEngineIamPolicy } from '@cdktn/provider-google-beta'

const googleVertexAiReasoningEngineIamPolicyConfig: googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine_iam_policy#policy_data GoogleVertexAiReasoningEngineIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.reasoningEngine">reasoningEngine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine_iam_policy#reasoning_engine GoogleVertexAiReasoningEngineIamPolicy#reasoning_engine}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine_iam_policy#id GoogleVertexAiReasoningEngineIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine_iam_policy#project GoogleVertexAiReasoningEngineIamPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine_iam_policy#region GoogleVertexAiReasoningEngineIamPolicy#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine_iam_policy#policy_data GoogleVertexAiReasoningEngineIamPolicy#policy_data}.

---

##### `reasoningEngine`<sup>Required</sup> <a name="reasoningEngine" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.reasoningEngine"></a>

```typescript
public readonly reasoningEngine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine_iam_policy#reasoning_engine GoogleVertexAiReasoningEngineIamPolicy#reasoning_engine}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine_iam_policy#id GoogleVertexAiReasoningEngineIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine_iam_policy#project GoogleVertexAiReasoningEngineIamPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamPolicy.GoogleVertexAiReasoningEngineIamPolicyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_vertex_ai_reasoning_engine_iam_policy#region GoogleVertexAiReasoningEngineIamPolicy#region}.

---



