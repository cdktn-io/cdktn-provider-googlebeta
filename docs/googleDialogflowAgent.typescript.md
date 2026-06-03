# `googleDialogflowAgent` Submodule <a name="`googleDialogflowAgent` Submodule" id="@cdktn/provider-google-beta.googleDialogflowAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowAgent <a name="GoogleDialogflowAgent" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent google_dialogflow_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.Initializer"></a>

```typescript
import { googleDialogflowAgent } from '@cdktn/provider-google-beta'

new googleDialogflowAgent.GoogleDialogflowAgent(scope: Construct, id: string, config: GoogleDialogflowAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig">GoogleDialogflowAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig">GoogleDialogflowAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetApiVersion">resetApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetAvatarUri">resetAvatarUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetClassificationThreshold">resetClassificationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetMatchMode">resetMatchMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetSupportedLanguageCodes">resetSupportedLanguageCodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDialogflowAgentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts">GoogleDialogflowAgentTimeouts</a>

---

##### `resetApiVersion` <a name="resetApiVersion" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetApiVersion"></a>

```typescript
public resetApiVersion(): void
```

##### `resetAvatarUri` <a name="resetAvatarUri" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetAvatarUri"></a>

```typescript
public resetAvatarUri(): void
```

##### `resetClassificationThreshold` <a name="resetClassificationThreshold" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetClassificationThreshold"></a>

```typescript
public resetClassificationThreshold(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetEnableLogging"></a>

```typescript
public resetEnableLogging(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMatchMode` <a name="resetMatchMode" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetMatchMode"></a>

```typescript
public resetMatchMode(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSupportedLanguageCodes` <a name="resetSupportedLanguageCodes" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetSupportedLanguageCodes"></a>

```typescript
public resetSupportedLanguageCodes(): void
```

##### `resetTier` <a name="resetTier" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetTier"></a>

```typescript
public resetTier(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isConstruct"></a>

```typescript
import { googleDialogflowAgent } from '@cdktn/provider-google-beta'

googleDialogflowAgent.GoogleDialogflowAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isTerraformElement"></a>

```typescript
import { googleDialogflowAgent } from '@cdktn/provider-google-beta'

googleDialogflowAgent.GoogleDialogflowAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isTerraformResource"></a>

```typescript
import { googleDialogflowAgent } from '@cdktn/provider-google-beta'

googleDialogflowAgent.GoogleDialogflowAgent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.generateConfigForImport"></a>

```typescript
import { googleDialogflowAgent } from '@cdktn/provider-google-beta'

googleDialogflowAgent.GoogleDialogflowAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDialogflowAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.avatarUriBackend">avatarUriBackend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference">GoogleDialogflowAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.apiVersionInput">apiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.avatarUriInput">avatarUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.classificationThresholdInput">classificationThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.defaultLanguageCodeInput">defaultLanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.enableLoggingInput">enableLoggingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.matchModeInput">matchModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.supportedLanguageCodesInput">supportedLanguageCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts">GoogleDialogflowAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.apiVersion">apiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.avatarUri">avatarUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.classificationThreshold">classificationThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.matchMode">matchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.supportedLanguageCodes">supportedLanguageCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `avatarUriBackend`<sup>Required</sup> <a name="avatarUriBackend" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.avatarUriBackend"></a>

```typescript
public readonly avatarUriBackend: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowAgentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference">GoogleDialogflowAgentTimeoutsOutputReference</a>

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.apiVersionInput"></a>

```typescript
public readonly apiVersionInput: string;
```

- *Type:* string

---

##### `avatarUriInput`<sup>Optional</sup> <a name="avatarUriInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.avatarUriInput"></a>

```typescript
public readonly avatarUriInput: string;
```

- *Type:* string

---

##### `classificationThresholdInput`<sup>Optional</sup> <a name="classificationThresholdInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.classificationThresholdInput"></a>

```typescript
public readonly classificationThresholdInput: number;
```

- *Type:* number

---

##### `defaultLanguageCodeInput`<sup>Optional</sup> <a name="defaultLanguageCodeInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.defaultLanguageCodeInput"></a>

```typescript
public readonly defaultLanguageCodeInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.enableLoggingInput"></a>

```typescript
public readonly enableLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `matchModeInput`<sup>Optional</sup> <a name="matchModeInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.matchModeInput"></a>

```typescript
public readonly matchModeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `supportedLanguageCodesInput`<sup>Optional</sup> <a name="supportedLanguageCodesInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.supportedLanguageCodesInput"></a>

```typescript
public readonly supportedLanguageCodesInput: string[];
```

- *Type:* string[]

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDialogflowAgentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts">GoogleDialogflowAgentTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

---

##### `avatarUri`<sup>Required</sup> <a name="avatarUri" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.avatarUri"></a>

```typescript
public readonly avatarUri: string;
```

- *Type:* string

---

##### `classificationThreshold`<sup>Required</sup> <a name="classificationThreshold" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.classificationThreshold"></a>

```typescript
public readonly classificationThreshold: number;
```

- *Type:* number

---

##### `defaultLanguageCode`<sup>Required</sup> <a name="defaultLanguageCode" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.defaultLanguageCode"></a>

```typescript
public readonly defaultLanguageCode: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchMode`<sup>Required</sup> <a name="matchMode" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.matchMode"></a>

```typescript
public readonly matchMode: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `supportedLanguageCodes`<sup>Required</sup> <a name="supportedLanguageCodes" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.supportedLanguageCodes"></a>

```typescript
public readonly supportedLanguageCodes: string[];
```

- *Type:* string[]

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowAgentConfig <a name="GoogleDialogflowAgentConfig" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.Initializer"></a>

```typescript
import { googleDialogflowAgent } from '@cdktn/provider-google-beta'

const googleDialogflowAgentConfig: googleDialogflowAgent.GoogleDialogflowAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>string</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.displayName">displayName</a></code> | <code>string</code> | The name of this agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.timeZone">timeZone</a></code> | <code>string</code> | The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.apiVersion">apiVersion</a></code> | <code>string</code> | API version displayed in Dialogflow console. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.avatarUri">avatarUri</a></code> | <code>string</code> | The URI of the agent's avatar, which are used throughout the Dialogflow console. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.classificationThreshold">classificationThreshold</a></code> | <code>number</code> | To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.description">description</a></code> | <code>string</code> | The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktn.IResolvable</code> | Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#id GoogleDialogflowAgent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.matchMode">matchMode</a></code> | <code>string</code> | Determines how intents are detected from user queries. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#project GoogleDialogflowAgent#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.supportedLanguageCodes">supportedLanguageCodes</a></code> | <code>string[]</code> | The list of all languages supported by this agent (except for the defaultLanguageCode). |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.tier">tier</a></code> | <code>string</code> | The agent tier. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts">GoogleDialogflowAgentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `defaultLanguageCode`<sup>Required</sup> <a name="defaultLanguageCode" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.defaultLanguageCode"></a>

```typescript
public readonly defaultLanguageCode: string;
```

- *Type:* string

The default language of the agent as a language tag.

[See Language Support](https://cloud.google.com/dialogflow/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#default_language_code GoogleDialogflowAgent#default_language_code}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The name of this agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#display_name GoogleDialogflowAgent#display_name}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#time_zone GoogleDialogflowAgent#time_zone}

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

API version displayed in Dialogflow console.

If not specified, V2 API is assumed. Clients are free to query
different service endpoints for different API versions. However, bots connectors and webhook calls will follow
the specified API version.
* API_VERSION_V1: Legacy V1 API.
* API_VERSION_V2: V2 API.
* API_VERSION_V2_BETA_1: V2beta1 API. Possible values: ["API_VERSION_V1", "API_VERSION_V2", "API_VERSION_V2_BETA_1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#api_version GoogleDialogflowAgent#api_version}

---

##### `avatarUri`<sup>Optional</sup> <a name="avatarUri" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.avatarUri"></a>

```typescript
public readonly avatarUri: string;
```

- *Type:* string

The URI of the agent's avatar, which are used throughout the Dialogflow console.

When an image URL is entered
into this field, the Dialogflow will save the image in the backend. The address of the backend image returned
from the API will be shown in the [avatarUriBackend] field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#avatar_uri GoogleDialogflowAgent#avatar_uri}

---

##### `classificationThreshold`<sup>Optional</sup> <a name="classificationThreshold" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.classificationThreshold"></a>

```typescript
public readonly classificationThreshold: number;
```

- *Type:* number

To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold.

If the returned score value is less than the threshold
value, then a fallback intent will be triggered or, if there are no fallback intents defined, no intent will be
triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the
default of 0.3 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#classification_threshold GoogleDialogflowAgent#classification_threshold}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#deletion_policy GoogleDialogflowAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#description GoogleDialogflowAgent#description}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#enable_logging GoogleDialogflowAgent#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#id GoogleDialogflowAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matchMode`<sup>Optional</sup> <a name="matchMode" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.matchMode"></a>

```typescript
public readonly matchMode: string;
```

- *Type:* string

Determines how intents are detected from user queries.

* MATCH_MODE_HYBRID: Best for agents with a small number of examples in intents and/or wide use of templates
syntax and composite entities.
* MATCH_MODE_ML_ONLY: Can be used for agents with a large number of examples in intents, especially the ones
using

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#project GoogleDialogflowAgent#project}.

---

##### `supportedLanguageCodes`<sup>Optional</sup> <a name="supportedLanguageCodes" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.supportedLanguageCodes"></a>

```typescript
public readonly supportedLanguageCodes: string[];
```

- *Type:* string[]

The list of all languages supported by this agent (except for the defaultLanguageCode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#supported_language_codes GoogleDialogflowAgent#supported_language_codes}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

The agent tier.

If not specified, TIER_STANDARD is assumed.
* TIER_STANDARD: Standard tier.
* TIER_ENTERPRISE: Enterprise tier (Essentials).
* TIER_ENTERPRISE_PLUS: Enterprise tier (Plus).
NOTE: Due to consistency issues, the provider will not read this field from the API. Drift is possible between
the Terraform state and Dialogflow if the agent tier is changed outside of Terraform. Possible values: ["TIER_STANDARD", "TIER_ENTERPRISE", "TIER_ENTERPRISE_PLUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#tier GoogleDialogflowAgent#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowAgentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts">GoogleDialogflowAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#timeouts GoogleDialogflowAgent#timeouts}

---

### GoogleDialogflowAgentTimeouts <a name="GoogleDialogflowAgentTimeouts" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts.Initializer"></a>

```typescript
import { googleDialogflowAgent } from '@cdktn/provider-google-beta'

const googleDialogflowAgentTimeouts: googleDialogflowAgent.GoogleDialogflowAgentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#create GoogleDialogflowAgent#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#delete GoogleDialogflowAgent#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#update GoogleDialogflowAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#create GoogleDialogflowAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#delete GoogleDialogflowAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_agent#update GoogleDialogflowAgent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowAgentTimeoutsOutputReference <a name="GoogleDialogflowAgentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowAgent } from '@cdktn/provider-google-beta'

new googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts">GoogleDialogflowAgentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowAgentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts">GoogleDialogflowAgentTimeouts</a>

---



