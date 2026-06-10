# `googleIamOauthClientCredential` Submodule <a name="`googleIamOauthClientCredential` Submodule" id="@cdktn/provider-google-beta.googleIamOauthClientCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamOauthClientCredential <a name="GoogleIamOauthClientCredential" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential google_iam_oauth_client_credential}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.Initializer"></a>

```typescript
import { googleIamOauthClientCredential } from '@cdktn/provider-google-beta'

new googleIamOauthClientCredential.GoogleIamOauthClientCredential(scope: Construct, id: string, config: GoogleIamOauthClientCredentialConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig">GoogleIamOauthClientCredentialConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig">GoogleIamOauthClientCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIamOauthClientCredentialTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeouts">GoogleIamOauthClientCredentialTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIamOauthClientCredential resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.isConstruct"></a>

```typescript
import { googleIamOauthClientCredential } from '@cdktn/provider-google-beta'

googleIamOauthClientCredential.GoogleIamOauthClientCredential.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.isTerraformElement"></a>

```typescript
import { googleIamOauthClientCredential } from '@cdktn/provider-google-beta'

googleIamOauthClientCredential.GoogleIamOauthClientCredential.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.isTerraformResource"></a>

```typescript
import { googleIamOauthClientCredential } from '@cdktn/provider-google-beta'

googleIamOauthClientCredential.GoogleIamOauthClientCredential.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.generateConfigForImport"></a>

```typescript
import { googleIamOauthClientCredential } from '@cdktn/provider-google-beta'

googleIamOauthClientCredential.GoogleIamOauthClientCredential.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleIamOauthClientCredential resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamOauthClientCredential to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamOauthClientCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIamOauthClientCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference">GoogleIamOauthClientCredentialTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.oauthClientCredentialIdInput">oauthClientCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.oauthclientInput">oauthclientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeouts">GoogleIamOauthClientCredentialTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.oauthclient">oauthclient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.oauthClientCredentialId">oauthClientCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamOauthClientCredentialTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference">GoogleIamOauthClientCredentialTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `oauthClientCredentialIdInput`<sup>Optional</sup> <a name="oauthClientCredentialIdInput" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.oauthClientCredentialIdInput"></a>

```typescript
public readonly oauthClientCredentialIdInput: string;
```

- *Type:* string

---

##### `oauthclientInput`<sup>Optional</sup> <a name="oauthclientInput" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.oauthclientInput"></a>

```typescript
public readonly oauthclientInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIamOauthClientCredentialTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeouts">GoogleIamOauthClientCredentialTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `oauthclient`<sup>Required</sup> <a name="oauthclient" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.oauthclient"></a>

```typescript
public readonly oauthclient: string;
```

- *Type:* string

---

##### `oauthClientCredentialId`<sup>Required</sup> <a name="oauthClientCredentialId" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.oauthClientCredentialId"></a>

```typescript
public readonly oauthClientCredentialId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredential.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamOauthClientCredentialConfig <a name="GoogleIamOauthClientCredentialConfig" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.Initializer"></a>

```typescript
import { googleIamOauthClientCredential } from '@cdktn/provider-google-beta'

const googleIamOauthClientCredentialConfig: googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.oauthclient">oauthclient</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.oauthClientCredentialId">oauthClientCredentialId</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the OauthClientCredential is disabled. You cannot use a disabled OauthClientCredential. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.displayName">displayName</a></code> | <code>string</code> | A user-specified display name of the OauthClientCredential. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#id GoogleIamOauthClientCredential#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#project GoogleIamOauthClientCredential#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeouts">GoogleIamOauthClientCredentialTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#location GoogleIamOauthClientCredential#location}

---

##### `oauthclient`<sup>Required</sup> <a name="oauthclient" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.oauthclient"></a>

```typescript
public readonly oauthclient: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#oauthclient GoogleIamOauthClientCredential#oauthclient}

---

##### `oauthClientCredentialId`<sup>Required</sup> <a name="oauthClientCredentialId" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.oauthClientCredentialId"></a>

```typescript
public readonly oauthClientCredentialId: string;
```

- *Type:* string

Required.

The ID to use for the OauthClientCredential, which becomes the
final component of the resource name. This value should be 4-32 characters,
and may contain the characters [a-z0-9-]. The prefix 'gcp-' is
reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#oauth_client_credential_id GoogleIamOauthClientCredential#oauth_client_credential_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#deletion_policy GoogleIamOauthClientCredential#deletion_policy}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the OauthClientCredential is disabled. You cannot use a disabled OauthClientCredential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#disabled GoogleIamOauthClientCredential#disabled}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A user-specified display name of the OauthClientCredential.

Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#display_name GoogleIamOauthClientCredential#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#id GoogleIamOauthClientCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#project GoogleIamOauthClientCredential#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamOauthClientCredentialTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeouts">GoogleIamOauthClientCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#timeouts GoogleIamOauthClientCredential#timeouts}

---

### GoogleIamOauthClientCredentialTimeouts <a name="GoogleIamOauthClientCredentialTimeouts" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeouts.Initializer"></a>

```typescript
import { googleIamOauthClientCredential } from '@cdktn/provider-google-beta'

const googleIamOauthClientCredentialTimeouts: googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#create GoogleIamOauthClientCredential#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#delete GoogleIamOauthClientCredential#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#update GoogleIamOauthClientCredential#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#create GoogleIamOauthClientCredential#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#delete GoogleIamOauthClientCredential#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_oauth_client_credential#update GoogleIamOauthClientCredential#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamOauthClientCredentialTimeoutsOutputReference <a name="GoogleIamOauthClientCredentialTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIamOauthClientCredential } from '@cdktn/provider-google-beta'

new googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeouts">GoogleIamOauthClientCredentialTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamOauthClientCredentialTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamOauthClientCredential.GoogleIamOauthClientCredentialTimeouts">GoogleIamOauthClientCredentialTimeouts</a>

---



