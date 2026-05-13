# `googleFirebaseAiLogicPromptTemplateLock` Submodule <a name="`googleFirebaseAiLogicPromptTemplateLock` Submodule" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAiLogicPromptTemplateLock <a name="GoogleFirebaseAiLogicPromptTemplateLock" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_firebase_ai_logic_prompt_template_lock google_firebase_ai_logic_prompt_template_lock}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer"></a>

```typescript
import { googleFirebaseAiLogicPromptTemplateLock } from '@cdktn/provider-google-beta'

new googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock(scope: Construct, id: string, config: GoogleFirebaseAiLogicPromptTemplateLockConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig">GoogleFirebaseAiLogicPromptTemplateLockConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig">GoogleFirebaseAiLogicPromptTemplateLockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleFirebaseAiLogicPromptTemplateLockTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseAiLogicPromptTemplateLock resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isConstruct"></a>

```typescript
import { googleFirebaseAiLogicPromptTemplateLock } from '@cdktn/provider-google-beta'

googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformElement"></a>

```typescript
import { googleFirebaseAiLogicPromptTemplateLock } from '@cdktn/provider-google-beta'

googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformResource"></a>

```typescript
import { googleFirebaseAiLogicPromptTemplateLock } from '@cdktn/provider-google-beta'

googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport"></a>

```typescript
import { googleFirebaseAiLogicPromptTemplateLock } from '@cdktn/provider-google-beta'

googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleFirebaseAiLogicPromptTemplateLock resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseAiLogicPromptTemplateLock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseAiLogicPromptTemplateLock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAiLogicPromptTemplateLock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.locked">locked</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference">GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.templateIdInput">templateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.templateId">templateId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.locked"></a>

```typescript
public readonly locked: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference">GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `templateIdInput`<sup>Optional</sup> <a name="templateIdInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.templateIdInput"></a>

```typescript
public readonly templateIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleFirebaseAiLogicPromptTemplateLockTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAiLogicPromptTemplateLockConfig <a name="GoogleFirebaseAiLogicPromptTemplateLockConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.Initializer"></a>

```typescript
import { googleFirebaseAiLogicPromptTemplateLock } from '@cdktn/provider-google-beta'

const googleFirebaseAiLogicPromptTemplateLockConfig: googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.location">location</a></code> | <code>string</code> | The location of the prompt template. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.templateId">templateId</a></code> | <code>string</code> | The ID of the prompt template. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#id GoogleFirebaseAiLogicPromptTemplateLock#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#project GoogleFirebaseAiLogicPromptTemplateLock#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#location GoogleFirebaseAiLogicPromptTemplateLock#location}

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

The ID of the prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#template_id GoogleFirebaseAiLogicPromptTemplateLock#template_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#id GoogleFirebaseAiLogicPromptTemplateLock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#project GoogleFirebaseAiLogicPromptTemplateLock#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseAiLogicPromptTemplateLockTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#timeouts GoogleFirebaseAiLogicPromptTemplateLock#timeouts}

---

### GoogleFirebaseAiLogicPromptTemplateLockTimeouts <a name="GoogleFirebaseAiLogicPromptTemplateLockTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts.Initializer"></a>

```typescript
import { googleFirebaseAiLogicPromptTemplateLock } from '@cdktn/provider-google-beta'

const googleFirebaseAiLogicPromptTemplateLockTimeouts: googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#create GoogleFirebaseAiLogicPromptTemplateLock#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#delete GoogleFirebaseAiLogicPromptTemplateLock#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#create GoogleFirebaseAiLogicPromptTemplateLock#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#delete GoogleFirebaseAiLogicPromptTemplateLock#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference <a name="GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAiLogicPromptTemplateLock } from '@cdktn/provider-google-beta'

new googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseAiLogicPromptTemplateLockTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a>

---



