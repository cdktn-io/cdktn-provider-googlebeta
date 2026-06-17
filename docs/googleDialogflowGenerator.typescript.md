# `googleDialogflowGenerator` Submodule <a name="`googleDialogflowGenerator` Submodule" id="@cdktn/provider-google-beta.googleDialogflowGenerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowGenerator <a name="GoogleDialogflowGenerator" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator google_dialogflow_generator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGenerator(scope: Construct, id: string, config: GoogleDialogflowGeneratorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig">GoogleDialogflowGeneratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig">GoogleDialogflowGeneratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putInferenceParameter">putInferenceParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putSummarizationContext">putSummarizationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetGeneratorId">resetGeneratorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetInferenceParameter">resetInferenceParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetPublishedModel">resetPublishedModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetTriggerEvent">resetTriggerEvent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInferenceParameter` <a name="putInferenceParameter" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putInferenceParameter"></a>

```typescript
public putInferenceParameter(value: GoogleDialogflowGeneratorInferenceParameter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putInferenceParameter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter">GoogleDialogflowGeneratorInferenceParameter</a>

---

##### `putSummarizationContext` <a name="putSummarizationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putSummarizationContext"></a>

```typescript
public putSummarizationContext(value: GoogleDialogflowGeneratorSummarizationContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putSummarizationContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext">GoogleDialogflowGeneratorSummarizationContext</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDialogflowGeneratorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts">GoogleDialogflowGeneratorTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGeneratorId` <a name="resetGeneratorId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetGeneratorId"></a>

```typescript
public resetGeneratorId(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInferenceParameter` <a name="resetInferenceParameter" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetInferenceParameter"></a>

```typescript
public resetInferenceParameter(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPublishedModel` <a name="resetPublishedModel" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetPublishedModel"></a>

```typescript
public resetPublishedModel(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTriggerEvent` <a name="resetTriggerEvent" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetTriggerEvent"></a>

```typescript
public resetTriggerEvent(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowGenerator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isConstruct"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

googleDialogflowGenerator.GoogleDialogflowGenerator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isTerraformElement"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

googleDialogflowGenerator.GoogleDialogflowGenerator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isTerraformResource"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

googleDialogflowGenerator.GoogleDialogflowGenerator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.generateConfigForImport"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

googleDialogflowGenerator.GoogleDialogflowGenerator.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDialogflowGenerator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowGenerator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowGenerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowGenerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.inferenceParameter">inferenceParameter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference">GoogleDialogflowGeneratorInferenceParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.summarizationContext">summarizationContext</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference">GoogleDialogflowGeneratorSummarizationContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference">GoogleDialogflowGeneratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.generatorIdInput">generatorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.inferenceParameterInput">inferenceParameterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter">GoogleDialogflowGeneratorInferenceParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.publishedModelInput">publishedModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.summarizationContextInput">summarizationContextInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext">GoogleDialogflowGeneratorSummarizationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts">GoogleDialogflowGeneratorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.triggerEventInput">triggerEventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.generatorId">generatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.publishedModel">publishedModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.triggerEvent">triggerEvent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `inferenceParameter`<sup>Required</sup> <a name="inferenceParameter" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.inferenceParameter"></a>

```typescript
public readonly inferenceParameter: GoogleDialogflowGeneratorInferenceParameterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference">GoogleDialogflowGeneratorInferenceParameterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `summarizationContext`<sup>Required</sup> <a name="summarizationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.summarizationContext"></a>

```typescript
public readonly summarizationContext: GoogleDialogflowGeneratorSummarizationContextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference">GoogleDialogflowGeneratorSummarizationContextOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowGeneratorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference">GoogleDialogflowGeneratorTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `generatorIdInput`<sup>Optional</sup> <a name="generatorIdInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.generatorIdInput"></a>

```typescript
public readonly generatorIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inferenceParameterInput`<sup>Optional</sup> <a name="inferenceParameterInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.inferenceParameterInput"></a>

```typescript
public readonly inferenceParameterInput: GoogleDialogflowGeneratorInferenceParameter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter">GoogleDialogflowGeneratorInferenceParameter</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `publishedModelInput`<sup>Optional</sup> <a name="publishedModelInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.publishedModelInput"></a>

```typescript
public readonly publishedModelInput: string;
```

- *Type:* string

---

##### `summarizationContextInput`<sup>Optional</sup> <a name="summarizationContextInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.summarizationContextInput"></a>

```typescript
public readonly summarizationContextInput: GoogleDialogflowGeneratorSummarizationContext;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext">GoogleDialogflowGeneratorSummarizationContext</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDialogflowGeneratorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts">GoogleDialogflowGeneratorTimeouts</a>

---

##### `triggerEventInput`<sup>Optional</sup> <a name="triggerEventInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.triggerEventInput"></a>

```typescript
public readonly triggerEventInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `generatorId`<sup>Required</sup> <a name="generatorId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.generatorId"></a>

```typescript
public readonly generatorId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `publishedModel`<sup>Required</sup> <a name="publishedModel" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.publishedModel"></a>

```typescript
public readonly publishedModel: string;
```

- *Type:* string

---

##### `triggerEvent`<sup>Required</sup> <a name="triggerEvent" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.triggerEvent"></a>

```typescript
public readonly triggerEvent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowGeneratorConfig <a name="GoogleDialogflowGeneratorConfig" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

const googleDialogflowGeneratorConfig: googleDialogflowGenerator.GoogleDialogflowGeneratorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.location">location</a></code> | <code>string</code> | desc. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.summarizationContext">summarizationContext</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext">GoogleDialogflowGeneratorSummarizationContext</a></code> | summarization_context block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.description">description</a></code> | <code>string</code> | Optional. Human readable description of the generator. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.generatorId">generatorId</a></code> | <code>string</code> | Optional. The ID to use for the generator, which will become the final component of the generator's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#id GoogleDialogflowGenerator#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.inferenceParameter">inferenceParameter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter">GoogleDialogflowGeneratorInferenceParameter</a></code> | inference_parameter block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#project GoogleDialogflowGenerator#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.publishedModel">publishedModel</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts">GoogleDialogflowGeneratorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.triggerEvent">triggerEvent</a></code> | <code>string</code> | Optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

desc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#location GoogleDialogflowGenerator#location}

---

##### `summarizationContext`<sup>Required</sup> <a name="summarizationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.summarizationContext"></a>

```typescript
public readonly summarizationContext: GoogleDialogflowGeneratorSummarizationContext;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext">GoogleDialogflowGeneratorSummarizationContext</a>

summarization_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#summarization_context GoogleDialogflowGenerator#summarization_context}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#deletion_policy GoogleDialogflowGenerator#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Human readable description of the generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#description GoogleDialogflowGenerator#description}

---

##### `generatorId`<sup>Optional</sup> <a name="generatorId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.generatorId"></a>

```typescript
public readonly generatorId: string;
```

- *Type:* string

Optional. The ID to use for the generator, which will become the final component of the generator's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#generator_id GoogleDialogflowGenerator#generator_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#id GoogleDialogflowGenerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inferenceParameter`<sup>Optional</sup> <a name="inferenceParameter" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.inferenceParameter"></a>

```typescript
public readonly inferenceParameter: GoogleDialogflowGeneratorInferenceParameter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter">GoogleDialogflowGeneratorInferenceParameter</a>

inference_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#inference_parameter GoogleDialogflowGenerator#inference_parameter}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#project GoogleDialogflowGenerator#project}.

---

##### `publishedModel`<sup>Optional</sup> <a name="publishedModel" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.publishedModel"></a>

```typescript
public readonly publishedModel: string;
```

- *Type:* string

Optional.

The published Large Language Model name. * To use the latest model version, specify the model name without version number. Example: text-bison * To use a stable model version, specify the version number as well. Example: text-bison@002.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#published_model GoogleDialogflowGenerator#published_model}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowGeneratorTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts">GoogleDialogflowGeneratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#timeouts GoogleDialogflowGenerator#timeouts}

---

##### `triggerEvent`<sup>Optional</sup> <a name="triggerEvent" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.triggerEvent"></a>

```typescript
public readonly triggerEvent: string;
```

- *Type:* string

Optional.

The trigger event of the generator. It defines when the generator is triggered in a conversation. Possible values: ["END_OF_UTTERANCE", "MANUAL_CALL", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#trigger_event GoogleDialogflowGenerator#trigger_event}

---

### GoogleDialogflowGeneratorInferenceParameter <a name="GoogleDialogflowGeneratorInferenceParameter" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

const googleDialogflowGeneratorInferenceParameter: googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.property.maxOutputTokens">maxOutputTokens</a></code> | <code>number</code> | Optional. Maximum number of the output tokens for the generator. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.property.temperature">temperature</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.property.topK">topK</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.property.topP">topP</a></code> | <code>number</code> | Optional. |

---

##### `maxOutputTokens`<sup>Optional</sup> <a name="maxOutputTokens" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.property.maxOutputTokens"></a>

```typescript
public readonly maxOutputTokens: number;
```

- *Type:* number

Optional. Maximum number of the output tokens for the generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#max_output_tokens GoogleDialogflowGenerator#max_output_tokens}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

Optional.

Controls the randomness of LLM predictions. Low temperature = less random. High temperature = more random. If unset (or 0), uses a default value of 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#temperature GoogleDialogflowGenerator#temperature}

---

##### `topK`<sup>Optional</sup> <a name="topK" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.property.topK"></a>

```typescript
public readonly topK: number;
```

- *Type:* number

Optional.

Top-k changes how the model selects tokens for output. A top-k of 1 means the selected token is the most probable among all tokens in the model's vocabulary (also called greedy decoding), while a top-k of 3 means that the next token is selected from among the 3 most probable tokens (using temperature). For each token selection step, the top K tokens with the highest probabilities are sampled. Then tokens are further filtered based on topP with the final token selected using temperature sampling. Specify a lower value for less random responses and a higher value for more random responses. Acceptable value is [1, 40], default to 40.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#top_k GoogleDialogflowGenerator#top_k}

---

##### `topP`<sup>Optional</sup> <a name="topP" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

Optional.

Top-p changes how the model selects tokens for output. Tokens are selected from most K (see topK parameter) probable to least until the sum of their probabilities equals the top-p value. For example, if tokens A, B, and C have a probability of 0.3, 0.2, and 0.1 and the top-p value is 0.5, then the model will select either A or B as the next token (using temperature) and doesn't consider C. The default top-p value is 0.95. Specify a lower value for less random responses and a higher value for more random responses. Acceptable value is [0.0, 1.0], default to 0.95.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#top_p GoogleDialogflowGenerator#top_p}

---

### GoogleDialogflowGeneratorSummarizationContext <a name="GoogleDialogflowGeneratorSummarizationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

const googleDialogflowGeneratorSummarizationContext: googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.property.fewShotExamples">fewShotExamples</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples">GoogleDialogflowGeneratorSummarizationContextFewShotExamples</a>[]</code> | few_shot_examples block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.property.outputLanguageCode">outputLanguageCode</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.property.summarizationSections">summarizationSections</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections">GoogleDialogflowGeneratorSummarizationContextSummarizationSections</a>[]</code> | summarization_sections block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.property.version">version</a></code> | <code>string</code> | Optional. Version of the feature. If not set, default to latest version. Current candidates are ["1.0"]. |

---

##### `fewShotExamples`<sup>Optional</sup> <a name="fewShotExamples" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.property.fewShotExamples"></a>

```typescript
public readonly fewShotExamples: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamples[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples">GoogleDialogflowGeneratorSummarizationContextFewShotExamples</a>[]

few_shot_examples block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#few_shot_examples GoogleDialogflowGenerator#few_shot_examples}

---

##### `outputLanguageCode`<sup>Optional</sup> <a name="outputLanguageCode" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.property.outputLanguageCode"></a>

```typescript
public readonly outputLanguageCode: string;
```

- *Type:* string

Optional.

The target language of the generated summary. The language code for conversation will be used if this field is empty. Supported 2.0 and later versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#output_language_code GoogleDialogflowGenerator#output_language_code}

---

##### `summarizationSections`<sup>Optional</sup> <a name="summarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.property.summarizationSections"></a>

```typescript
public readonly summarizationSections: IResolvable | GoogleDialogflowGeneratorSummarizationContextSummarizationSections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections">GoogleDialogflowGeneratorSummarizationContextSummarizationSections</a>[]

summarization_sections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#summarization_sections GoogleDialogflowGenerator#summarization_sections}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Optional. Version of the feature. If not set, default to latest version. Current candidates are ["1.0"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#version GoogleDialogflowGenerator#version}

---

### GoogleDialogflowGeneratorSummarizationContextFewShotExamples <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamples" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

const googleDialogflowGeneratorSummarizationContextFewShotExamples: googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.property.output">output</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput</a></code> | output block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.property.conversationContext">conversationContext</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a></code> | conversation_context block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.property.extraInfo">extraInfo</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.property.summarizationSectionList">summarizationSectionList</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a></code> | summarization_section_list block. |

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.property.output"></a>

```typescript
public readonly output: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#output GoogleDialogflowGenerator#output}

---

##### `conversationContext`<sup>Optional</sup> <a name="conversationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.property.conversationContext"></a>

```typescript
public readonly conversationContext: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a>

conversation_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#conversation_context GoogleDialogflowGenerator#conversation_context}

---

##### `extraInfo`<sup>Optional</sup> <a name="extraInfo" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.property.extraInfo"></a>

```typescript
public readonly extraInfo: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Key is the placeholder field name in input, value is the value of the placeholder. E.g. instruction contains "@price", and ingested data has <"price", "10">

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#extra_info GoogleDialogflowGenerator#extra_info}

---

##### `summarizationSectionList`<sup>Optional</sup> <a name="summarizationSectionList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.property.summarizationSectionList"></a>

```typescript
public readonly summarizationSectionList: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a>

summarization_section_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#summarization_section_list GoogleDialogflowGenerator#summarization_section_list}

---

### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

const googleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext: googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext.property.messageEntries">messageEntries</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>[]</code> | message_entries block. |

---

##### `messageEntries`<sup>Optional</sup> <a name="messageEntries" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext.property.messageEntries"></a>

```typescript
public readonly messageEntries: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>[]

message_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#message_entries GoogleDialogflowGenerator#message_entries}

---

### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

const googleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries: googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.createTime">createTime</a></code> | <code>string</code> | Optional. Create time of the message entry. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.languageCode">languageCode</a></code> | <code>string</code> | Optional. The language of the text. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.role">role</a></code> | <code>string</code> | Optional. Participant role of the message. Possible values: ["HUMAN_AGENT", "AUTOMATED_AGENT", "END_USER"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.text">text</a></code> | <code>string</code> | Optional. Transcript content of the message. |

---

##### `createTime`<sup>Optional</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

Optional. Create time of the message entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#create_time GoogleDialogflowGenerator#create_time}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Optional. The language of the text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#language_code GoogleDialogflowGenerator#language_code}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Optional. Participant role of the message. Possible values: ["HUMAN_AGENT", "AUTOMATED_AGENT", "END_USER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#role GoogleDialogflowGenerator#role}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Optional. Transcript content of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#text GoogleDialogflowGenerator#text}

---

### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

const googleDialogflowGeneratorSummarizationContextFewShotExamplesOutput: googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput.property.summarySuggestion">summarySuggestion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a></code> | summary_suggestion block. |

---

##### `summarySuggestion`<sup>Optional</sup> <a name="summarySuggestion" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput.property.summarySuggestion"></a>

```typescript
public readonly summarySuggestion: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a>

summary_suggestion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#summary_suggestion GoogleDialogflowGenerator#summary_suggestion}

---

### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

const googleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion: googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion.property.summarySections">summarySections</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>[]</code> | summary_sections block. |

---

##### `summarySections`<sup>Required</sup> <a name="summarySections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion.property.summarySections"></a>

```typescript
public readonly summarySections: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>[]

summary_sections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#summary_sections GoogleDialogflowGenerator#summary_sections}

---

### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

const googleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections: googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.property.section">section</a></code> | <code>string</code> | Required. Name of the section. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.property.summary">summary</a></code> | <code>string</code> | Required. Summary text for the section. |

---

##### `section`<sup>Required</sup> <a name="section" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.property.section"></a>

```typescript
public readonly section: string;
```

- *Type:* string

Required. Name of the section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#section GoogleDialogflowGenerator#section}

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

Required. Summary text for the section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#summary GoogleDialogflowGenerator#summary}

---

### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

const googleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct: googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct.property.summarizationSections">summarizationSections</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>[]</code> | summarization_sections block. |

---

##### `summarizationSections`<sup>Optional</sup> <a name="summarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct.property.summarizationSections"></a>

```typescript
public readonly summarizationSections: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>[]

summarization_sections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#summarization_sections GoogleDialogflowGenerator#summarization_sections}

---

### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

const googleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections: googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.definition">definition</a></code> | <code>string</code> | Optional. Definition of the section, for example, "what the customer needs help with or has question about.". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.key">key</a></code> | <code>string</code> | Optional. Name of the section, for example, "situation". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.type">type</a></code> | <code>string</code> | Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"]. |

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

Optional. Definition of the section, for example, "what the customer needs help with or has question about.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#definition GoogleDialogflowGenerator#definition}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Optional. Name of the section, for example, "situation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#key GoogleDialogflowGenerator#key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#type GoogleDialogflowGenerator#type}

---

### GoogleDialogflowGeneratorSummarizationContextSummarizationSections <a name="GoogleDialogflowGeneratorSummarizationContextSummarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

const googleDialogflowGeneratorSummarizationContextSummarizationSections: googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections.property.definition">definition</a></code> | <code>string</code> | Optional. Definition of the section, for example, "what the customer needs help with or has question about.". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections.property.key">key</a></code> | <code>string</code> | Optional. Name of the section, for example, "situation". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections.property.type">type</a></code> | <code>string</code> | Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"]. |

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

Optional. Definition of the section, for example, "what the customer needs help with or has question about.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#definition GoogleDialogflowGenerator#definition}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Optional. Name of the section, for example, "situation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#key GoogleDialogflowGenerator#key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#type GoogleDialogflowGenerator#type}

---

### GoogleDialogflowGeneratorTimeouts <a name="GoogleDialogflowGeneratorTimeouts" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

const googleDialogflowGeneratorTimeouts: googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#create GoogleDialogflowGenerator#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#delete GoogleDialogflowGenerator#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#update GoogleDialogflowGenerator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#create GoogleDialogflowGenerator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#delete GoogleDialogflowGenerator#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_dialogflow_generator#update GoogleDialogflowGenerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowGeneratorInferenceParameterOutputReference <a name="GoogleDialogflowGeneratorInferenceParameterOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resetMaxOutputTokens">resetMaxOutputTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resetTopK">resetTopK</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resetTopP">resetTopP</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxOutputTokens` <a name="resetMaxOutputTokens" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resetMaxOutputTokens"></a>

```typescript
public resetMaxOutputTokens(): void
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resetTemperature"></a>

```typescript
public resetTemperature(): void
```

##### `resetTopK` <a name="resetTopK" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resetTopK"></a>

```typescript
public resetTopK(): void
```

##### `resetTopP` <a name="resetTopP" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resetTopP"></a>

```typescript
public resetTopP(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.maxOutputTokensInput">maxOutputTokensInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.topKInput">topKInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.topPInput">topPInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.maxOutputTokens">maxOutputTokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.topK">topK</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.topP">topP</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter">GoogleDialogflowGeneratorInferenceParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxOutputTokensInput`<sup>Optional</sup> <a name="maxOutputTokensInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.maxOutputTokensInput"></a>

```typescript
public readonly maxOutputTokensInput: number;
```

- *Type:* number

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.temperatureInput"></a>

```typescript
public readonly temperatureInput: number;
```

- *Type:* number

---

##### `topKInput`<sup>Optional</sup> <a name="topKInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.topKInput"></a>

```typescript
public readonly topKInput: number;
```

- *Type:* number

---

##### `topPInput`<sup>Optional</sup> <a name="topPInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.topPInput"></a>

```typescript
public readonly topPInput: number;
```

- *Type:* number

---

##### `maxOutputTokens`<sup>Required</sup> <a name="maxOutputTokens" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.maxOutputTokens"></a>

```typescript
public readonly maxOutputTokens: number;
```

- *Type:* number

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `topK`<sup>Required</sup> <a name="topK" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.topK"></a>

```typescript
public readonly topK: number;
```

- *Type:* number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowGeneratorInferenceParameter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter">GoogleDialogflowGeneratorInferenceParameter</a>

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.get"></a>

```typescript
public get(index: number): GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>[]

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetCreateTime">resetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreateTime` <a name="resetCreateTime" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetCreateTime"></a>

```typescript
public resetCreateTime(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetRole` <a name="resetRole" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.createTimeInput">createTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTimeInput`<sup>Optional</sup> <a name="createTimeInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.createTimeInput"></a>

```typescript
public readonly createTimeInput: string;
```

- *Type:* string

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.putMessageEntries">putMessageEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resetMessageEntries">resetMessageEntries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessageEntries` <a name="putMessageEntries" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.putMessageEntries"></a>

```typescript
public putMessageEntries(value: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.putMessageEntries.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>[]

---

##### `resetMessageEntries` <a name="resetMessageEntries" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resetMessageEntries"></a>

```typescript
public resetMessageEntries(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.messageEntries">messageEntries</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.messageEntriesInput">messageEntriesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageEntries`<sup>Required</sup> <a name="messageEntries" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.messageEntries"></a>

```typescript
public readonly messageEntries: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList</a>

---

##### `messageEntriesInput`<sup>Optional</sup> <a name="messageEntriesInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.messageEntriesInput"></a>

```typescript
public readonly messageEntriesInput: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a>

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.get"></a>

```typescript
public get(index: number): GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples">GoogleDialogflowGeneratorSummarizationContextFewShotExamples</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamples[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples">GoogleDialogflowGeneratorSummarizationContextFewShotExamples</a>[]

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.putSummarySuggestion">putSummarySuggestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resetSummarySuggestion">resetSummarySuggestion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSummarySuggestion` <a name="putSummarySuggestion" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.putSummarySuggestion"></a>

```typescript
public putSummarySuggestion(value: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.putSummarySuggestion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a>

---

##### `resetSummarySuggestion` <a name="resetSummarySuggestion" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resetSummarySuggestion"></a>

```typescript
public resetSummarySuggestion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.summarySuggestion">summarySuggestion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.summarySuggestionInput">summarySuggestionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `summarySuggestion`<sup>Required</sup> <a name="summarySuggestion" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.summarySuggestion"></a>

```typescript
public readonly summarySuggestion: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference</a>

---

##### `summarySuggestionInput`<sup>Optional</sup> <a name="summarySuggestionInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.summarySuggestionInput"></a>

```typescript
public readonly summarySuggestionInput: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput</a>

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putConversationContext">putConversationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putSummarizationSectionList">putSummarizationSectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetConversationContext">resetConversationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetExtraInfo">resetExtraInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetSummarizationSectionList">resetSummarizationSectionList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConversationContext` <a name="putConversationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putConversationContext"></a>

```typescript
public putConversationContext(value: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putConversationContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a>

---

##### `putOutput` <a name="putOutput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putOutput"></a>

```typescript
public putOutput(value: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput</a>

---

##### `putSummarizationSectionList` <a name="putSummarizationSectionList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putSummarizationSectionList"></a>

```typescript
public putSummarizationSectionList(value: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putSummarizationSectionList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a>

---

##### `resetConversationContext` <a name="resetConversationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetConversationContext"></a>

```typescript
public resetConversationContext(): void
```

##### `resetExtraInfo` <a name="resetExtraInfo" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetExtraInfo"></a>

```typescript
public resetExtraInfo(): void
```

##### `resetSummarizationSectionList` <a name="resetSummarizationSectionList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetSummarizationSectionList"></a>

```typescript
public resetSummarizationSectionList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.conversationContext">conversationContext</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.output">output</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.summarizationSectionList">summarizationSectionList</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.conversationContextInput">conversationContextInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.extraInfoInput">extraInfoInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.outputInput">outputInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.summarizationSectionListInput">summarizationSectionListInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.extraInfo">extraInfo</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples">GoogleDialogflowGeneratorSummarizationContextFewShotExamples</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conversationContext`<sup>Required</sup> <a name="conversationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.conversationContext"></a>

```typescript
public readonly conversationContext: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.output"></a>

```typescript
public readonly output: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference</a>

---

##### `summarizationSectionList`<sup>Required</sup> <a name="summarizationSectionList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.summarizationSectionList"></a>

```typescript
public readonly summarizationSectionList: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference</a>

---

##### `conversationContextInput`<sup>Optional</sup> <a name="conversationContextInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.conversationContextInput"></a>

```typescript
public readonly conversationContextInput: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a>

---

##### `extraInfoInput`<sup>Optional</sup> <a name="extraInfoInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.extraInfoInput"></a>

```typescript
public readonly extraInfoInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.outputInput"></a>

```typescript
public readonly outputInput: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput</a>

---

##### `summarizationSectionListInput`<sup>Optional</sup> <a name="summarizationSectionListInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.summarizationSectionListInput"></a>

```typescript
public readonly summarizationSectionListInput: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a>

---

##### `extraInfo`<sup>Required</sup> <a name="extraInfo" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.extraInfo"></a>

```typescript
public readonly extraInfo: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamples;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples">GoogleDialogflowGeneratorSummarizationContextFewShotExamples</a>

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.putSummarySections">putSummarySections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSummarySections` <a name="putSummarySections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.putSummarySections"></a>

```typescript
public putSummarySections(value: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.putSummarySections.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.summarySections">summarySections</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.summarySectionsInput">summarySectionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `summarySections`<sup>Required</sup> <a name="summarySections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.summarySections"></a>

```typescript
public readonly summarySections: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList</a>

---

##### `summarySectionsInput`<sup>Optional</sup> <a name="summarySectionsInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.summarySectionsInput"></a>

```typescript
public readonly summarySectionsInput: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a>

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.get"></a>

```typescript
public get(index: number): GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>[]

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.sectionInput">sectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.section">section</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sectionInput`<sup>Optional</sup> <a name="sectionInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.sectionInput"></a>

```typescript
public readonly sectionInput: string;
```

- *Type:* string

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `section`<sup>Required</sup> <a name="section" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.section"></a>

```typescript
public readonly section: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.putSummarizationSections">putSummarizationSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resetSummarizationSections">resetSummarizationSections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSummarizationSections` <a name="putSummarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.putSummarizationSections"></a>

```typescript
public putSummarizationSections(value: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.putSummarizationSections.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>[]

---

##### `resetSummarizationSections` <a name="resetSummarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resetSummarizationSections"></a>

```typescript
public resetSummarizationSections(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.summarizationSections">summarizationSections</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.summarizationSectionsInput">summarizationSectionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `summarizationSections`<sup>Required</sup> <a name="summarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.summarizationSections"></a>

```typescript
public readonly summarizationSections: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList</a>

---

##### `summarizationSectionsInput`<sup>Optional</sup> <a name="summarizationSectionsInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.summarizationSectionsInput"></a>

```typescript
public readonly summarizationSectionsInput: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a>

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.get"></a>

```typescript
public get(index: number): GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>[]

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinition` <a name="resetDefinition" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetDefinition"></a>

```typescript
public resetDefinition(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.definitionInput">definitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.definition">definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.definitionInput"></a>

```typescript
public readonly definitionInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>

---


### GoogleDialogflowGeneratorSummarizationContextOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.putFewShotExamples">putFewShotExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.putSummarizationSections">putSummarizationSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resetFewShotExamples">resetFewShotExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resetOutputLanguageCode">resetOutputLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resetSummarizationSections">resetSummarizationSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFewShotExamples` <a name="putFewShotExamples" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.putFewShotExamples"></a>

```typescript
public putFewShotExamples(value: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamples[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.putFewShotExamples.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples">GoogleDialogflowGeneratorSummarizationContextFewShotExamples</a>[]

---

##### `putSummarizationSections` <a name="putSummarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.putSummarizationSections"></a>

```typescript
public putSummarizationSections(value: IResolvable | GoogleDialogflowGeneratorSummarizationContextSummarizationSections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.putSummarizationSections.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections">GoogleDialogflowGeneratorSummarizationContextSummarizationSections</a>[]

---

##### `resetFewShotExamples` <a name="resetFewShotExamples" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resetFewShotExamples"></a>

```typescript
public resetFewShotExamples(): void
```

##### `resetOutputLanguageCode` <a name="resetOutputLanguageCode" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resetOutputLanguageCode"></a>

```typescript
public resetOutputLanguageCode(): void
```

##### `resetSummarizationSections` <a name="resetSummarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resetSummarizationSections"></a>

```typescript
public resetSummarizationSections(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.fewShotExamples">fewShotExamples</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.summarizationSections">summarizationSections</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList">GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.fewShotExamplesInput">fewShotExamplesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples">GoogleDialogflowGeneratorSummarizationContextFewShotExamples</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.outputLanguageCodeInput">outputLanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.summarizationSectionsInput">summarizationSectionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections">GoogleDialogflowGeneratorSummarizationContextSummarizationSections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.outputLanguageCode">outputLanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext">GoogleDialogflowGeneratorSummarizationContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fewShotExamples`<sup>Required</sup> <a name="fewShotExamples" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.fewShotExamples"></a>

```typescript
public readonly fewShotExamples: GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList</a>

---

##### `summarizationSections`<sup>Required</sup> <a name="summarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.summarizationSections"></a>

```typescript
public readonly summarizationSections: GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList">GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList</a>

---

##### `fewShotExamplesInput`<sup>Optional</sup> <a name="fewShotExamplesInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.fewShotExamplesInput"></a>

```typescript
public readonly fewShotExamplesInput: IResolvable | GoogleDialogflowGeneratorSummarizationContextFewShotExamples[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples">GoogleDialogflowGeneratorSummarizationContextFewShotExamples</a>[]

---

##### `outputLanguageCodeInput`<sup>Optional</sup> <a name="outputLanguageCodeInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.outputLanguageCodeInput"></a>

```typescript
public readonly outputLanguageCodeInput: string;
```

- *Type:* string

---

##### `summarizationSectionsInput`<sup>Optional</sup> <a name="summarizationSectionsInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.summarizationSectionsInput"></a>

```typescript
public readonly summarizationSectionsInput: IResolvable | GoogleDialogflowGeneratorSummarizationContextSummarizationSections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections">GoogleDialogflowGeneratorSummarizationContextSummarizationSections</a>[]

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `outputLanguageCode`<sup>Required</sup> <a name="outputLanguageCode" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.outputLanguageCode"></a>

```typescript
public readonly outputLanguageCode: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowGeneratorSummarizationContext;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext">GoogleDialogflowGeneratorSummarizationContext</a>

---


### GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList <a name="GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.get"></a>

```typescript
public get(index: number): GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections">GoogleDialogflowGeneratorSummarizationContextSummarizationSections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowGeneratorSummarizationContextSummarizationSections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections">GoogleDialogflowGeneratorSummarizationContextSummarizationSections</a>[]

---


### GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinition` <a name="resetDefinition" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetDefinition"></a>

```typescript
public resetDefinition(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.definitionInput">definitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.definition">definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections">GoogleDialogflowGeneratorSummarizationContextSummarizationSections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.definitionInput"></a>

```typescript
public readonly definitionInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowGeneratorSummarizationContextSummarizationSections;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections">GoogleDialogflowGeneratorSummarizationContextSummarizationSections</a>

---


### GoogleDialogflowGeneratorTimeoutsOutputReference <a name="GoogleDialogflowGeneratorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowGenerator } from '@cdktn/provider-google-beta'

new googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts">GoogleDialogflowGeneratorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowGeneratorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts">GoogleDialogflowGeneratorTimeouts</a>

---



