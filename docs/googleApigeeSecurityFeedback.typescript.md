# `googleApigeeSecurityFeedback` Submodule <a name="`googleApigeeSecurityFeedback` Submodule" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeSecurityFeedback <a name="GoogleApigeeSecurityFeedback" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback google_apigee_security_feedback}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.Initializer"></a>

```typescript
import { googleApigeeSecurityFeedback } from '@cdktn/provider-google-beta'

new googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback(scope: Construct, id: string, config: GoogleApigeeSecurityFeedbackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig">GoogleApigeeSecurityFeedbackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig">GoogleApigeeSecurityFeedbackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.putFeedbackContexts">putFeedbackContexts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.resetReason">resetReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFeedbackContexts` <a name="putFeedbackContexts" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.putFeedbackContexts"></a>

```typescript
public putFeedbackContexts(value: IResolvable | GoogleApigeeSecurityFeedbackFeedbackContexts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.putFeedbackContexts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContexts">GoogleApigeeSecurityFeedbackFeedbackContexts</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleApigeeSecurityFeedbackTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeouts">GoogleApigeeSecurityFeedbackTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.resetId"></a>

```typescript
public resetId(): void
```

##### `resetReason` <a name="resetReason" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.resetReason"></a>

```typescript
public resetReason(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApigeeSecurityFeedback resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.isConstruct"></a>

```typescript
import { googleApigeeSecurityFeedback } from '@cdktn/provider-google-beta'

googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.isTerraformElement"></a>

```typescript
import { googleApigeeSecurityFeedback } from '@cdktn/provider-google-beta'

googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.isTerraformResource"></a>

```typescript
import { googleApigeeSecurityFeedback } from '@cdktn/provider-google-beta'

googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.generateConfigForImport"></a>

```typescript
import { googleApigeeSecurityFeedback } from '@cdktn/provider-google-beta'

googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleApigeeSecurityFeedback resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeSecurityFeedback to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeSecurityFeedback that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApigeeSecurityFeedback to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.feedbackContexts">feedbackContexts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList">GoogleApigeeSecurityFeedbackFeedbackContextsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference">GoogleApigeeSecurityFeedbackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.feedbackContextsInput">feedbackContextsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContexts">GoogleApigeeSecurityFeedbackFeedbackContexts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.feedbackIdInput">feedbackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.feedbackTypeInput">feedbackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.reasonInput">reasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeouts">GoogleApigeeSecurityFeedbackTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.feedbackId">feedbackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.feedbackType">feedbackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.reason">reason</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `feedbackContexts`<sup>Required</sup> <a name="feedbackContexts" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.feedbackContexts"></a>

```typescript
public readonly feedbackContexts: GoogleApigeeSecurityFeedbackFeedbackContextsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList">GoogleApigeeSecurityFeedbackFeedbackContextsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApigeeSecurityFeedbackTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference">GoogleApigeeSecurityFeedbackTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `feedbackContextsInput`<sup>Optional</sup> <a name="feedbackContextsInput" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.feedbackContextsInput"></a>

```typescript
public readonly feedbackContextsInput: IResolvable | GoogleApigeeSecurityFeedbackFeedbackContexts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContexts">GoogleApigeeSecurityFeedbackFeedbackContexts</a>[]

---

##### `feedbackIdInput`<sup>Optional</sup> <a name="feedbackIdInput" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.feedbackIdInput"></a>

```typescript
public readonly feedbackIdInput: string;
```

- *Type:* string

---

##### `feedbackTypeInput`<sup>Optional</sup> <a name="feedbackTypeInput" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.feedbackTypeInput"></a>

```typescript
public readonly feedbackTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `reasonInput`<sup>Optional</sup> <a name="reasonInput" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.reasonInput"></a>

```typescript
public readonly reasonInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleApigeeSecurityFeedbackTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeouts">GoogleApigeeSecurityFeedbackTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `feedbackId`<sup>Required</sup> <a name="feedbackId" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.feedbackId"></a>

```typescript
public readonly feedbackId: string;
```

- *Type:* string

---

##### `feedbackType`<sup>Required</sup> <a name="feedbackType" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.feedbackType"></a>

```typescript
public readonly feedbackType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedback.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeSecurityFeedbackConfig <a name="GoogleApigeeSecurityFeedbackConfig" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.Initializer"></a>

```typescript
import { googleApigeeSecurityFeedback } from '@cdktn/provider-google-beta'

const googleApigeeSecurityFeedbackConfig: googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.feedbackContexts">feedbackContexts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContexts">GoogleApigeeSecurityFeedbackFeedbackContexts</a>[]</code> | feedback_contexts block. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.feedbackId">feedbackId</a></code> | <code>string</code> | Resource ID of the security feedback. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.feedbackType">feedbackType</a></code> | <code>string</code> | The type of feedback being submitted. Possible values: ["EXCLUDED_DETECTION"]. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.orgId">orgId</a></code> | <code>string</code> | The Apigee Organization associated with the Apigee Security Feedback, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.comment">comment</a></code> | <code>string</code> | Optional text the user can provide for additional, unstructured context. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the feedback. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#id GoogleApigeeSecurityFeedback#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.reason">reason</a></code> | <code>string</code> | The reason for the feedback. Possible values: ["INTERNAL_SYSTEM", "NON_RISK_CLIENT", "NAT", "PENETRATION_TEST", "OTHER"]. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeouts">GoogleApigeeSecurityFeedbackTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `feedbackContexts`<sup>Required</sup> <a name="feedbackContexts" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.feedbackContexts"></a>

```typescript
public readonly feedbackContexts: IResolvable | GoogleApigeeSecurityFeedbackFeedbackContexts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContexts">GoogleApigeeSecurityFeedbackFeedbackContexts</a>[]

feedback_contexts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#feedback_contexts GoogleApigeeSecurityFeedback#feedback_contexts}

---

##### `feedbackId`<sup>Required</sup> <a name="feedbackId" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.feedbackId"></a>

```typescript
public readonly feedbackId: string;
```

- *Type:* string

Resource ID of the security feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#feedback_id GoogleApigeeSecurityFeedback#feedback_id}

---

##### `feedbackType`<sup>Required</sup> <a name="feedbackType" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.feedbackType"></a>

```typescript
public readonly feedbackType: string;
```

- *Type:* string

The type of feedback being submitted. Possible values: ["EXCLUDED_DETECTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#feedback_type GoogleApigeeSecurityFeedback#feedback_type}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Apigee Organization associated with the Apigee Security Feedback, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#org_id GoogleApigeeSecurityFeedback#org_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Optional text the user can provide for additional, unstructured context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#comment GoogleApigeeSecurityFeedback#comment}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#display_name GoogleApigeeSecurityFeedback#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#id GoogleApigeeSecurityFeedback#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reason`<sup>Optional</sup> <a name="reason" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

The reason for the feedback. Possible values: ["INTERNAL_SYSTEM", "NON_RISK_CLIENT", "NAT", "PENETRATION_TEST", "OTHER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#reason GoogleApigeeSecurityFeedback#reason}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApigeeSecurityFeedbackTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeouts">GoogleApigeeSecurityFeedbackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#timeouts GoogleApigeeSecurityFeedback#timeouts}

---

### GoogleApigeeSecurityFeedbackFeedbackContexts <a name="GoogleApigeeSecurityFeedbackFeedbackContexts" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContexts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContexts.Initializer"></a>

```typescript
import { googleApigeeSecurityFeedback } from '@cdktn/provider-google-beta'

const googleApigeeSecurityFeedbackFeedbackContexts: googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContexts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContexts.property.attribute">attribute</a></code> | <code>string</code> | The attribute the user is providing feedback about. Possible values: ["ATTRIBUTE_ENVIRONMENTS", "ATTRIBUTE_IP_ADDRESS_RANGES"]. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContexts.property.values">values</a></code> | <code>string[]</code> | The values of the attribute the user is providing feedback about, separated by commas. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContexts.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

The attribute the user is providing feedback about. Possible values: ["ATTRIBUTE_ENVIRONMENTS", "ATTRIBUTE_IP_ADDRESS_RANGES"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#attribute GoogleApigeeSecurityFeedback#attribute}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContexts.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The values of the attribute the user is providing feedback about, separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#values GoogleApigeeSecurityFeedback#values}

---

### GoogleApigeeSecurityFeedbackTimeouts <a name="GoogleApigeeSecurityFeedbackTimeouts" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeouts.Initializer"></a>

```typescript
import { googleApigeeSecurityFeedback } from '@cdktn/provider-google-beta'

const googleApigeeSecurityFeedbackTimeouts: googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#create GoogleApigeeSecurityFeedback#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#delete GoogleApigeeSecurityFeedback#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#update GoogleApigeeSecurityFeedback#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#create GoogleApigeeSecurityFeedback#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#delete GoogleApigeeSecurityFeedback#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_security_feedback#update GoogleApigeeSecurityFeedback#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeSecurityFeedbackFeedbackContextsList <a name="GoogleApigeeSecurityFeedbackFeedbackContextsList" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.Initializer"></a>

```typescript
import { googleApigeeSecurityFeedback } from '@cdktn/provider-google-beta'

new googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.get"></a>

```typescript
public get(index: number): GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContexts">GoogleApigeeSecurityFeedbackFeedbackContexts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeSecurityFeedbackFeedbackContexts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContexts">GoogleApigeeSecurityFeedbackFeedbackContexts</a>[]

---


### GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference <a name="GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer"></a>

```typescript
import { googleApigeeSecurityFeedback } from '@cdktn/provider-google-beta'

new googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContexts">GoogleApigeeSecurityFeedbackFeedbackContexts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContextsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeSecurityFeedbackFeedbackContexts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackFeedbackContexts">GoogleApigeeSecurityFeedbackFeedbackContexts</a>

---


### GoogleApigeeSecurityFeedbackTimeoutsOutputReference <a name="GoogleApigeeSecurityFeedbackTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleApigeeSecurityFeedback } from '@cdktn/provider-google-beta'

new googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeouts">GoogleApigeeSecurityFeedbackTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeSecurityFeedbackTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApigeeSecurityFeedback.GoogleApigeeSecurityFeedbackTimeouts">GoogleApigeeSecurityFeedbackTimeouts</a>

---



