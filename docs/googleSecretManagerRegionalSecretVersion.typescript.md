# `googleSecretManagerRegionalSecretVersion` Submodule <a name="`googleSecretManagerRegionalSecretVersion` Submodule" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecretManagerRegionalSecretVersion <a name="GoogleSecretManagerRegionalSecretVersion" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_secret_manager_regional_secret_version google_secret_manager_regional_secret_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretVersion } from '@cdktn/provider-google-beta'

new googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion(scope: Construct, id: string, config: GoogleSecretManagerRegionalSecretVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig">GoogleSecretManagerRegionalSecretVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig">GoogleSecretManagerRegionalSecretVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.resetIsSecretDataBase64">resetIsSecretDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSecretManagerRegionalSecretVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeouts">GoogleSecretManagerRegionalSecretVersionTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsSecretDataBase64` <a name="resetIsSecretDataBase64" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.resetIsSecretDataBase64"></a>

```typescript
public resetIsSecretDataBase64(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSecretManagerRegionalSecretVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.isConstruct"></a>

```typescript
import { googleSecretManagerRegionalSecretVersion } from '@cdktn/provider-google-beta'

googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.isTerraformElement"></a>

```typescript
import { googleSecretManagerRegionalSecretVersion } from '@cdktn/provider-google-beta'

googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.isTerraformResource"></a>

```typescript
import { googleSecretManagerRegionalSecretVersion } from '@cdktn/provider-google-beta'

googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.generateConfigForImport"></a>

```typescript
import { googleSecretManagerRegionalSecretVersion } from '@cdktn/provider-google-beta'

googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleSecretManagerRegionalSecretVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSecretManagerRegionalSecretVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSecretManagerRegionalSecretVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_secret_manager_regional_secret_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSecretManagerRegionalSecretVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.customerManagedEncryption">customerManagedEncryption</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList">GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.destroyTime">destroyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference">GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.isSecretDataBase64Input">isSecretDataBase64Input</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.secretDataInput">secretDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeouts">GoogleSecretManagerRegionalSecretVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.isSecretDataBase64">isSecretDataBase64</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.secretData">secretData</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `customerManagedEncryption`<sup>Required</sup> <a name="customerManagedEncryption" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.customerManagedEncryption"></a>

```typescript
public readonly customerManagedEncryption: GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList">GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList</a>

---

##### `destroyTime`<sup>Required</sup> <a name="destroyTime" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.destroyTime"></a>

```typescript
public readonly destroyTime: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference">GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isSecretDataBase64Input`<sup>Optional</sup> <a name="isSecretDataBase64Input" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.isSecretDataBase64Input"></a>

```typescript
public readonly isSecretDataBase64Input: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `secretDataInput`<sup>Optional</sup> <a name="secretDataInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.secretDataInput"></a>

```typescript
public readonly secretDataInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSecretManagerRegionalSecretVersionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeouts">GoogleSecretManagerRegionalSecretVersionTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isSecretDataBase64`<sup>Required</sup> <a name="isSecretDataBase64" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.isSecretDataBase64"></a>

```typescript
public readonly isSecretDataBase64: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `secretData`<sup>Required</sup> <a name="secretData" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.secretData"></a>

```typescript
public readonly secretData: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecretManagerRegionalSecretVersionConfig <a name="GoogleSecretManagerRegionalSecretVersionConfig" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretVersion } from '@cdktn/provider-google-beta'

const googleSecretManagerRegionalSecretVersionConfig: googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.secret">secret</a></code> | <code>string</code> | Secret Manager regional secret resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.secretData">secretData</a></code> | <code>string</code> | The secret data. Must be no larger than 64KiB. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/secret_manager_regional_regional_secret_version.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | The current state of the regional secret version. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_secret_manager_regional_secret_version#id GoogleSecretManagerRegionalSecretVersion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.isSecretDataBase64">isSecretDataBase64</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeouts">GoogleSecretManagerRegionalSecretVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Secret Manager regional secret resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_secret_manager_regional_secret_version#secret GoogleSecretManagerRegionalSecretVersion#secret}

---

##### `secretData`<sup>Required</sup> <a name="secretData" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.secretData"></a>

```typescript
public readonly secretData: string;
```

- *Type:* string

The secret data. Must be no larger than 64KiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_secret_manager_regional_secret_version#secret_data GoogleSecretManagerRegionalSecretVersion#secret_data}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/secret_manager_regional_regional_secret_version.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_secret_manager_regional_secret_version#deletion_policy GoogleSecretManagerRegionalSecretVersion#deletion_policy}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The current state of the regional secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_secret_manager_regional_secret_version#enabled GoogleSecretManagerRegionalSecretVersion#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_secret_manager_regional_secret_version#id GoogleSecretManagerRegionalSecretVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isSecretDataBase64`<sup>Optional</sup> <a name="isSecretDataBase64" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.isSecretDataBase64"></a>

```typescript
public readonly isSecretDataBase64: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_secret_manager_regional_secret_version#is_secret_data_base64 GoogleSecretManagerRegionalSecretVersion#is_secret_data_base64}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSecretManagerRegionalSecretVersionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeouts">GoogleSecretManagerRegionalSecretVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_secret_manager_regional_secret_version#timeouts GoogleSecretManagerRegionalSecretVersion#timeouts}

---

### GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption <a name="GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretVersion } from '@cdktn/provider-google-beta'

const googleSecretManagerRegionalSecretVersionCustomerManagedEncryption: googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption = { ... }
```


### GoogleSecretManagerRegionalSecretVersionTimeouts <a name="GoogleSecretManagerRegionalSecretVersionTimeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeouts.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretVersion } from '@cdktn/provider-google-beta'

const googleSecretManagerRegionalSecretVersionTimeouts: googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_secret_manager_regional_secret_version#create GoogleSecretManagerRegionalSecretVersion#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_secret_manager_regional_secret_version#delete GoogleSecretManagerRegionalSecretVersion#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_secret_manager_regional_secret_version#update GoogleSecretManagerRegionalSecretVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_secret_manager_regional_secret_version#create GoogleSecretManagerRegionalSecretVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_secret_manager_regional_secret_version#delete GoogleSecretManagerRegionalSecretVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_secret_manager_regional_secret_version#update GoogleSecretManagerRegionalSecretVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList <a name="GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretVersion } from '@cdktn/provider-google-beta'

new googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.get"></a>

```typescript
public get(index: number): GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference <a name="GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretVersion } from '@cdktn/provider-google-beta'

new googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.kmsKeyVersionName">kmsKeyVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption">GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyVersionName`<sup>Required</sup> <a name="kmsKeyVersionName" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.kmsKeyVersionName"></a>

```typescript
public readonly kmsKeyVersionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption">GoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption</a>

---


### GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference <a name="GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretVersion } from '@cdktn/provider-google-beta'

new googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeouts">GoogleSecretManagerRegionalSecretVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSecretManagerRegionalSecretVersionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretVersion.GoogleSecretManagerRegionalSecretVersionTimeouts">GoogleSecretManagerRegionalSecretVersionTimeouts</a>

---



