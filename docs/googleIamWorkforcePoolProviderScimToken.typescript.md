# `googleIamWorkforcePoolProviderScimToken` Submodule <a name="`googleIamWorkforcePoolProviderScimToken` Submodule" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkforcePoolProviderScimToken <a name="GoogleIamWorkforcePoolProviderScimToken" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token google_iam_workforce_pool_provider_scim_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProviderScimToken } from '@cdktn/provider-google-beta'

new googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken(scope: Construct, id: string, config: GoogleIamWorkforcePoolProviderScimTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig">GoogleIamWorkforcePoolProviderScimTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig">GoogleIamWorkforcePoolProviderScimTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIamWorkforcePoolProviderScimTokenTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts">GoogleIamWorkforcePoolProviderScimTokenTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIamWorkforcePoolProviderScimToken resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isConstruct"></a>

```typescript
import { googleIamWorkforcePoolProviderScimToken } from '@cdktn/provider-google-beta'

googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isTerraformElement"></a>

```typescript
import { googleIamWorkforcePoolProviderScimToken } from '@cdktn/provider-google-beta'

googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isTerraformResource"></a>

```typescript
import { googleIamWorkforcePoolProviderScimToken } from '@cdktn/provider-google-beta'

googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.generateConfigForImport"></a>

```typescript
import { googleIamWorkforcePoolProviderScimToken } from '@cdktn/provider-google-beta'

googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleIamWorkforcePoolProviderScimToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamWorkforcePoolProviderScimToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamWorkforcePoolProviderScimToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkforcePoolProviderScimToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.securityToken">securityToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference">GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.providerIdInput">providerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.scimTenantIdInput">scimTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.scimTokenIdInput">scimTokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts">GoogleIamWorkforcePoolProviderScimTokenTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.workforcePoolIdInput">workforcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.providerId">providerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.scimTenantId">scimTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.scimTokenId">scimTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.workforcePoolId">workforcePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `securityToken`<sup>Required</sup> <a name="securityToken" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.securityToken"></a>

```typescript
public readonly securityToken: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference">GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.providerIdInput"></a>

```typescript
public readonly providerIdInput: string;
```

- *Type:* string

---

##### `scimTenantIdInput`<sup>Optional</sup> <a name="scimTenantIdInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.scimTenantIdInput"></a>

```typescript
public readonly scimTenantIdInput: string;
```

- *Type:* string

---

##### `scimTokenIdInput`<sup>Optional</sup> <a name="scimTokenIdInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.scimTokenIdInput"></a>

```typescript
public readonly scimTokenIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIamWorkforcePoolProviderScimTokenTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts">GoogleIamWorkforcePoolProviderScimTokenTimeouts</a>

---

##### `workforcePoolIdInput`<sup>Optional</sup> <a name="workforcePoolIdInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.workforcePoolIdInput"></a>

```typescript
public readonly workforcePoolIdInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

---

##### `scimTenantId`<sup>Required</sup> <a name="scimTenantId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.scimTenantId"></a>

```typescript
public readonly scimTenantId: string;
```

- *Type:* string

---

##### `scimTokenId`<sup>Required</sup> <a name="scimTokenId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.scimTokenId"></a>

```typescript
public readonly scimTokenId: string;
```

- *Type:* string

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.workforcePoolId"></a>

```typescript
public readonly workforcePoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkforcePoolProviderScimTokenConfig <a name="GoogleIamWorkforcePoolProviderScimTokenConfig" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProviderScimToken } from '@cdktn/provider-google-beta'

const googleIamWorkforcePoolProviderScimTokenConfig: googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.providerId">providerId</a></code> | <code>string</code> | The ID of the Provider. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.scimTenantId">scimTenantId</a></code> | <code>string</code> | The ID of the SCIM Tenant. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.scimTokenId">scimTokenId</a></code> | <code>string</code> | The ID to use for the SCIM Token, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.workforcePoolId">workforcePoolId</a></code> | <code>string</code> | The ID of the Workforce Pool. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.displayName">displayName</a></code> | <code>string</code> | A user-specified display name for the scim token. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#id GoogleIamWorkforcePoolProviderScimToken#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts">GoogleIamWorkforcePoolProviderScimTokenTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#location GoogleIamWorkforcePoolProviderScimToken#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

The ID of the Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#provider_id GoogleIamWorkforcePoolProviderScimToken#provider_id}

---

##### `scimTenantId`<sup>Required</sup> <a name="scimTenantId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.scimTenantId"></a>

```typescript
public readonly scimTenantId: string;
```

- *Type:* string

The ID of the SCIM Tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#scim_tenant_id GoogleIamWorkforcePoolProviderScimToken#scim_tenant_id}

---

##### `scimTokenId`<sup>Required</sup> <a name="scimTokenId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.scimTokenId"></a>

```typescript
public readonly scimTokenId: string;
```

- *Type:* string

The ID to use for the SCIM Token, which becomes the final component of the resource name.

This value should be 4-32 characters and follow the pattern: '([a-z]([a-z0-9\\-]{2,30}[a-z0-9]))'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#scim_token_id GoogleIamWorkforcePoolProviderScimToken#scim_token_id}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.workforcePoolId"></a>

```typescript
public readonly workforcePoolId: string;
```

- *Type:* string

The ID of the Workforce Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#workforce_pool_id GoogleIamWorkforcePoolProviderScimToken#workforce_pool_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#deletion_policy GoogleIamWorkforcePoolProviderScimToken#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A user-specified display name for the scim token. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#display_name GoogleIamWorkforcePoolProviderScimToken#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#id GoogleIamWorkforcePoolProviderScimToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamWorkforcePoolProviderScimTokenTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts">GoogleIamWorkforcePoolProviderScimTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#timeouts GoogleIamWorkforcePoolProviderScimToken#timeouts}

---

### GoogleIamWorkforcePoolProviderScimTokenTimeouts <a name="GoogleIamWorkforcePoolProviderScimTokenTimeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProviderScimToken } from '@cdktn/provider-google-beta'

const googleIamWorkforcePoolProviderScimTokenTimeouts: googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#create GoogleIamWorkforcePoolProviderScimToken#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#delete GoogleIamWorkforcePoolProviderScimToken#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#update GoogleIamWorkforcePoolProviderScimToken#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#create GoogleIamWorkforcePoolProviderScimToken#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#delete GoogleIamWorkforcePoolProviderScimToken#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_workforce_pool_provider_scim_token#update GoogleIamWorkforcePoolProviderScimToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference <a name="GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProviderScimToken } from '@cdktn/provider-google-beta'

new googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts">GoogleIamWorkforcePoolProviderScimTokenTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamWorkforcePoolProviderScimTokenTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimToken.GoogleIamWorkforcePoolProviderScimTokenTimeouts">GoogleIamWorkforcePoolProviderScimTokenTimeouts</a>

---



